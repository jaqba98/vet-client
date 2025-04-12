import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { RouteStoreType } from '@vet-client/lib-store'
import {
  ChooseRoleDataModel,
  ChooseRoleDomainModel,
  ChooseRoleMetadataModel,
  ChooseRoleRequestModel,
  ResponseModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { ChooseRoleNotification } from '../../../notification/domain/logic/choose-role.notification'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class ChooseRoleHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private storeRoute: Store<RouteStoreType>,
    private chooseRole: ChooseRoleNotification,
  ) {}

  chooseRolePost(domain: ChooseRoleDomainModel) {
    const request: ChooseRoleRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<ChooseRoleDataModel, ChooseRoleMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.chooseRole, request },
      })
      .pipe(
        take(1),
        map((res) => {
          // todo: Refactor it
          // if (res.success) {
          //   this.storeRoute.dispatch(
          //     routeSetAction({
          //       page: RoutePageEnum.dashboard,
          //       section: RouteSectionEnum.dashboard,
          //     }),
          //   )
          // }
          // this.chooseRole.runResponse({
          //   success: res.success,
          //   message: res.messages[0],
          // })
        }),
      )
  }
}
