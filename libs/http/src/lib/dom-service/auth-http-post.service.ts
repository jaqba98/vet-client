import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import {
  loginDomainResponseAction,
  LoginDomainResponseType,
  RoutePageEnum,
  RouteSectionEnum,
  routeSetAction,
  RouteStoreType,
} from '@vet-client/lib-store'
import { registrationDomainResponseSet } from '@vet-client/lib-store'
import { LoginDomainDataModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import { HttpExecuteService } from '../infrastructure/http-execute.service'
import { RegistrationRequestDtoModel } from '../model/request/controller/registration-request-dto.model'
import { MethodEnum } from '../enum/method.enum'
import { EndpointEnum } from '../enum/endpoint.enum'
import { ResponseDtoModel } from '../model/response/response-dto.model'
import { LoginRequestDtoModel } from '../model/request/controller/login-request-dto.model'

@Injectable({ providedIn: 'root' })
export class AuthHttpPostService {
  constructor(
    private readonly cookie: CookieService,
    private readonly httpExecute: HttpExecuteService,
    private readonly storeRoute: Store<RouteStoreType>,
    private readonly storeLoginDomainResponse: Store<LoginDomainResponseType>,
  ) {}

  loginPost(data: LoginDomainDataModel) {
    const request: LoginRequestDtoModel = data
    return this.httpExecute
      .exec<ResponseDtoModel<string>>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.login, request } })
      .pipe(
        take(1),
        map((response) => {
          if (response.success) {
            this.cookie.updateToken(response.data)
            this.storeRoute.dispatch(routeSetAction({
              page: RoutePageEnum.dashboard, section: RouteSectionEnum.dashboard,
            }))
            this.storeLoginDomainResponse.dispatch(loginDomainResponseAction({
              success: response.success, message: response.data,
            }))
          }
          else {
            this.storeLoginDomainResponse.dispatch(loginDomainResponseAction({
              success: response.success,
              message: response.messages[0],
            }))
          }
        }),
      )
  }

  registrationPost(request: RegistrationRequestDtoModel) {
    return this.httpExecute
      .exec<ResponseDtoModel<string>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.registration, request },
      })
      .pipe(
        take(1),
        map((response) => {
          this.storeRoute.dispatch(registrationDomainResponseSet({
            success: response.success,
            message: response.messages[0],
          }))
        }),
      )
  }
}
