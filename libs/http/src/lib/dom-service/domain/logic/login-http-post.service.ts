import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { RoutePageEnum, RouteSectionEnum, routeSetAction, RouteStoreType } from '@vet-client/lib-store'
import {
  LoginDataModel,
  LoginDomainModel,
  LoginMetadataModel,
  LoginRequestModel,
  ResponseModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { LoginNotification } from '../../../notification/domain/logic/login.notification'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class LoginHttpPostService {
  constructor(
    private httpExecute: HttpExecuteService,
    private cookie: CookieService,
    private storeRoute: Store<RouteStoreType>,
    private login: LoginNotification,
  ) {}

  loginPost(domain: LoginDomainModel) {
    const request: LoginRequestModel = { ...domain }
    return this.httpExecute
      .exec<ResponseModel<LoginDataModel, LoginMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.login, request },
      })
      .pipe(
        take(1),
        map((res) => {
          if (res.success) {
            this.cookie.updateToken(res.data.token)
            this.storeRoute.dispatch(
              routeSetAction({ page: RoutePageEnum.dashboard, section: RouteSectionEnum.dashboard }),
            )
          }
          this.login.runResponse({ success: res.success, message: res.messages[0] })
        }),
      )
  }
}
