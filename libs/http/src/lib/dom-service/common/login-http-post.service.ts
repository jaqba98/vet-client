import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { LoginDomainModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import {
  RoutePageEnum,
  RouteSectionEnum,
  routeSetAction,
  RouteStoreType,
} from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { LoginRequestDtoModel } from '../../model/request/controller/login-request-dto.model'
import { LoginNotification } from '../../notification/login.notification'
import { ResponseModel } from '../../model/response/response.model'
import { LoginDataModel } from '../../model/data/login-data.model'
import { LoginMetadataModel } from '../../model/metadata/login-metadata.model'

@Injectable({ providedIn: 'root' })
export class LoginHttpPostService {
  constructor(
    private httpExecute: HttpExecuteService,
    private cookie: CookieService,
    private storeRoute: Store<RouteStoreType>,
    private login: LoginNotification,
  ) {}

  loginPost(domain: LoginDomainModel) {
    const request: LoginRequestDtoModel = { ...domain }
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
              routeSetAction({
                page: RoutePageEnum.dashboard,
                section: RouteSectionEnum.dashboard,
              }),
            )
          }
          this.login.runResponse({
            success: res.success,
            message: res.messages[0],
          })
        }),
      )
  }
}
