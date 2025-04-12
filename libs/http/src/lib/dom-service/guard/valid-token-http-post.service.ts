import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { NavStoreType, RouteStoreType } from '@vet-client/lib-store'
import {
  ResponseModel,
  ValidTokenDataModel,
  ValidTokenMetadataModel,
  ValidTokenRequestModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class ValidTokenHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private routeStore: Store<RouteStoreType>,
    private storeNav: Store<NavStoreType>,
  ) {}

  validTokenPost() {
    const request: ValidTokenRequestModel = { token: this.cookie.getToken() }
    return this.httpExecute
      .exec<ResponseModel<ValidTokenDataModel, ValidTokenMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.validToken, request },
      })
      .pipe(
        take(1),
        map((res) => {
          // todo: Refactor it
          // if (res.success) {
          //   this.storeNav.dispatch(
          //     navSetMenuType({ menuType: MenuTypeEnum.dashboard }),
          //   )
          //   return true
          // }
          // this.routeStore.dispatch(
          //   routeSetAction({
          //     page: RoutePageEnum.home,
          //     section: RouteSectionEnum.home,
          //   }),
          // )
          // this.storeNav.dispatch(
          //   navSetMenuType({ menuType: MenuTypeEnum.home }),
          // )
          // return false
        }),
      )
  }
}
