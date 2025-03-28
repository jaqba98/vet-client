import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { RoutePageEnum, RouteSectionEnum, routeSetAction, RouteStoreType } from '@vet-client/lib-store'
import { CookieService } from '@vet-client/lib-system'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { GuardRequestDtoModel } from '../../model/request/guard/guard-request-dto.model'
import { ResponseModel } from '../../model/response/response.model'

@Injectable({ providedIn: 'root' })
export class IsClientHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private routeStore: Store<RouteStoreType>,
  ) {}

  isClientPost() {
    const request: GuardRequestDtoModel = { token: this.cookie.getToken() }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.isClient, request },
      })
      .pipe(
        take(1),
        map((res) => {
          if (res.success) {
            return true
          }
          this.routeStore.dispatch(
            routeSetAction({
              page: RoutePageEnum.dashboardVet,
              section: RouteSectionEnum.dashboardVet,
            }),
          )
          return false
        }),
      )
  }
}
