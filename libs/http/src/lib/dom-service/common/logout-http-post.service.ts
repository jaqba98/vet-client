import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'

import {
  RoutePageEnum,
  RouteSectionEnum,
  routeSetAction,
  RouteStoreType,
} from '@vet-client/lib-store'
import { CookieService } from '@vet-client/lib-system'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { ResponseModel } from '../../model/response/response.model'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { Store } from '@ngrx/store'
import { LogoutDomainModel } from '@vet-client/lib-domain'
import { LogoutRequestDtoModel } from '../../model/request/controller/logout-request-dto.model'

@Injectable({ providedIn: 'root' })
export class LogoutHttpPostService {
  constructor(
    private httpExecute: HttpExecuteService,
    private cookie: CookieService,
    private storeRoute: Store<RouteStoreType>,
  ) {}

  logoutPost(domain: LogoutDomainModel) {
    const request: LogoutRequestDtoModel = { ...domain }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.logout, request },
      })
      .pipe(
        take(1),
        map((res) => {
          if (res.success) {
            this.cookie.deleteCookie('token')
            this.storeRoute.dispatch(
              routeSetAction({ page: RoutePageEnum.home, section: RouteSectionEnum.home }),
            )
          }
        }),
      )
  }
}
