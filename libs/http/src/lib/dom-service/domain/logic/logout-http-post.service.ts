import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { RouteStoreType } from '@vet-client/lib-store'
import { LogoutDataModel, LogoutMetadataModel, ResponseModel } from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class LogoutHttpPostService {
  constructor(
    private httpExecute: HttpExecuteService,
    private cookie: CookieService,
    private storeRoute: Store<RouteStoreType>,
  ) {}

  logoutPost() {
    return this.httpExecute
      .exec<ResponseModel<LogoutDataModel, LogoutMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.logout, request: {} },
      })
      .pipe(
        take(1),
        map((res) => {
          // todo: Refactor it
          // if (res.success) {
          //   this.cookie.deleteCookie('token')
          //   this.storeRoute.dispatch(
          //     routeSetAction({ page: RoutePageEnum.home, section: RouteSectionEnum.home }),
          //   )
          // }
        }),
      )
  }
}
