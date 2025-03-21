import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import {
  RoutePageEnum,
  RouteSectionEnum,
  routeSetAction,
  RouteStoreType,
} from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { LogoutRequestDtoModel } from '../../model/request/controller/logout-request-dto.model'
import { ResponseDtoModel } from '../../model/response/response-dto.model'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class LogoutHttpPostService {
  constructor(
    private readonly cookie: CookieService,
    private readonly httpExecute: HttpExecuteService,
    private readonly storeRoute: Store<RouteStoreType>,
  ) {}

  logoutPost() {
    const request: LogoutRequestDtoModel = undefined
    return this.httpExecute
      .exec<ResponseDtoModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.logout, request },
      })
      .pipe(
        take(1),
        map((response) => {
          if (response.success) {
            this.cookie.deleteCookie('token')
            this.storeRoute.dispatch(routeSetAction({
              page: RoutePageEnum.home, section: RouteSectionEnum.home,
            }))
          }
        }),
      )
  }
}
