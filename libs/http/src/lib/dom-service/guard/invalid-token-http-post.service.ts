import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import {
  MenuTypeEnum,
  navSetMenuType, NavStoreType,
  RoutePageEnum,
  RouteSectionEnum,
  routeSetAction,
  RouteStoreType,
} from '@vet-client/lib-store'
import { CookieService } from '@vet-client/lib-system'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { GuardRequestDtoModel } from '../../model/request/guard/guard-request-dto.model'
import { ResponseModel } from '../../model/response/response.model'

@Injectable({ providedIn: 'root' })
export class InvalidTokenHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private routeStore: Store<RouteStoreType>,
    private storeNav: Store<NavStoreType>,
  ) {}

  invalidTokenPost() {
    const request: GuardRequestDtoModel = { token: this.cookie.getToken() }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.validToken, request },
      })
      .pipe(
        take(1),
        map((res) => {
          if (res.success) {
            this.routeStore.dispatch(
              routeSetAction({
                page: RoutePageEnum.dashboard,
                section: RouteSectionEnum.dashboard,
              }),
            )
            this.storeNav.dispatch(
              navSetMenuType({ menuType: MenuTypeEnum.dashboard }),
            )
            return false
          }
          this.storeNav.dispatch(
            navSetMenuType({ menuType: MenuTypeEnum.home }),
          )
          return true
        }),
      )
  }
}
