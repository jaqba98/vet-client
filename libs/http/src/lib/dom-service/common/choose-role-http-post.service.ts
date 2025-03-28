import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { ChooseRoleDomainModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import { RoutePageEnum, RouteSectionEnum, routeSetAction, RouteStoreType } from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { ChooseRoleRequestDtoModel } from '../../model/request/controller/choose-role-request-dto.model'
import { ResponseModel } from '../../model/response/response.model'
import { ChooseRoleNotification } from '../../notification/choose-role.notification'

@Injectable({ providedIn: 'root' })
export class ChooseRoleHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private storeRoute: Store<RouteStoreType>,
    private chooseRole: ChooseRoleNotification,
  ) {}

  chooseRolePost(domain: ChooseRoleDomainModel) {
    const request: ChooseRoleRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.chooseRole, request },
      })
      .pipe(
        take(1),
        map((res) => {
          if (res.success) {
            this.storeRoute.dispatch(
              routeSetAction({
                page: RoutePageEnum.dashboard,
                section: RouteSectionEnum.dashboard,
              }),
            )
          }
          this.chooseRole.runResponse({
            success: res.success,
            message: res.messages[0],
          })
        }),
      )
  }
}
