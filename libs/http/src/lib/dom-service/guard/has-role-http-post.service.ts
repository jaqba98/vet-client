import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { RoutePageEnum, RouteSectionEnum, routeSetAction, RouteStoreType } from '@vet-client/lib-store'
import { HasRoleDataModel, HasRoleMetadataModel, HasRoleRequestModel, ResponseModel } from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class HasRoleHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private routeStore: Store<RouteStoreType>,
  ) {}

  hasRolePost() {
    const request: HasRoleRequestModel = { token: this.cookie.getToken() }
    return this.httpExecute
      .exec<ResponseModel<HasRoleDataModel, HasRoleMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.hasRole, request },
      })
      .pipe(
        take(1),
        map((res) => {
          if (res.success) {
            return true
          }
          this.routeStore.dispatch(
            routeSetAction({
              page: RoutePageEnum.dashboardChooseRole,
              section: RouteSectionEnum.dashboardChooseRole,
            }),
          )
          return false
        }),
      )
  }
}
