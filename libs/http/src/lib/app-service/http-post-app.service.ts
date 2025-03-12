import { Injectable } from '@angular/core'
import { map, skip, take } from 'rxjs'

import { HttpExecuteService } from '../infrastructure/http-execute.service'
import { MethodEnum } from '../enum/method.enum'
import { EndpointEnum } from '../enum/endpoint.enum'
import { AuthRequestModel } from '../model/request/auth-request.model'
import { AuthResponseModel } from '../model/response/auth-response.model'
import { ChooseRoleRequestModel } from '../model/request/choose-role-request.model'
import { ChooseRoleResponseModel } from '../model/response/choose-role-response.model'
import { HasRoleRequestModel } from '../model/request/has-role-request.model'
import { HasRoleResponseModel } from '../model/response/has-role-response.model'
import { IsClientRequestModel } from '../model/request/is-client-request.model'
import { IsClientResponseModel } from '../model/response/is-client-response.model'
import { IsVetRequestModel } from '../model/request/is-vet-request.model'
import { IsVetResponseModel } from '../model/response/is-vet-response.model'
import { LoginRequestModel } from '../model/request/login-request.model'
import { LoginResponseModel } from '../model/response/login-response.model'
import { LogoutRequestModel } from '../model/request/logout-request.model'
import { LogoutResponseModel } from '../model/response/logout-response.model'
import { RegistrationRequestModel } from '../model/request/registration-request.model'
import { RegistrationResponseModel } from '../model/response/registration-response.model'
import { GetAccountRequestModel } from '../model/request/get-account-request.model'
import { GetAccountResponseModel } from '../model/response/get-account-response.model'
import {
  ClinicCreateRequestModel,
  ClinicDeleteRequestModel,
  ClinicReadRequestModel, ClinicUpdateRequestModel,
} from '../model/request/clinic-request.model'
import {
  ClinicCreateResponseModel,
  ClinicDeleteResponseModel,
  ClinicReadResponseModel, ClinicUpdateResponseModel,
} from '../model/response/clinic-response.model'
import { CookieService } from '@vet-client/lib-system'
import { Store } from '@ngrx/store'
import {
  LoginDomainResponseType,
  RoutePageEnum,
  RouteSectionEnum,
  RouteStoreType, setLoginDomainResponse,
  setRoute,
} from '@vet-client/lib-store'
import { LoginDomainDataModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class HttpPostAppService {
  constructor(
    private readonly storeLoginDomainResponse: Store<LoginDomainResponseType>,
    private readonly httpExecute: HttpExecuteService,
    private cookie: CookieService,
    private storeRoute: Store<RouteStoreType>,
  ) {}

  authPost(request: AuthRequestModel) {
    return this.httpExecute
      .exec<AuthResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.auth, request } })
      .pipe(take(1))
  }

  chooseRolePost(request: ChooseRoleRequestModel) {
    return this.httpExecute
      .exec<ChooseRoleResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.chooseRole, request } })
      .pipe(take(1))
  }

  hasRolePost(request: HasRoleRequestModel) {
    return this.httpExecute
      .exec<HasRoleResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.hasRole, request } })
      .pipe(take(1))
  }

  isClientPost(request: IsClientRequestModel) {
    return this.httpExecute
      .exec<IsClientResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.isClient, request } })
      .pipe(take(1))
  }

  isVetPost(request: IsVetRequestModel) {
    return this.httpExecute
      .exec<IsVetResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.isVet, request } })
      .pipe(take(1))
  }

  loginPost(data: LoginDomainDataModel) {
    return this.httpExecute
      .exec<LoginResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.login, request: data } })
      .pipe(
        take(1),
        map((response) => {
          const { success, token } = response
          if (success) {
            this.cookie.updateToken(token)
            this.storeRoute.dispatch(setRoute({ page: RoutePageEnum.dashboard, section: RouteSectionEnum.dashboard }))
            this.storeLoginDomainResponse.dispatch(setLoginDomainResponse({ isError: false }))
          }
          else {
            this.storeLoginDomainResponse.dispatch(setLoginDomainResponse({ isError: true }))
          }
        }),
      )
  }

  logoutPost(request: LogoutRequestModel) {
    return this.httpExecute
      .exec<LogoutResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.logout, request } })
      .pipe(take(1))
  }

  registrationPost(request: RegistrationRequestModel) {
    return this.httpExecute
      .exec<RegistrationResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.registration, request },
      })
      .pipe(take(1))
  }

  getAccountPost(request: GetAccountRequestModel) {
    return this.httpExecute
      .exec<GetAccountResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.getAccount, request },
      })
      .pipe(take(1))
  }

  clinicCreatePost(request: ClinicCreateRequestModel) {
    return this.httpExecute
      .exec<ClinicCreateResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicCreate, request },
      })
      .pipe(take(1))
  }

  clinicReadPost(request: ClinicReadRequestModel) {
    return this.httpExecute
      .exec<ClinicReadResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicRead, request },
      })
      .pipe(take(1))
  }

  clinicUpdatePost(request: ClinicUpdateRequestModel) {
    return this.httpExecute
      .exec<ClinicUpdateResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicUpdate, request },
      })
      .pipe(take(1))
  }

  clinicDeletePost(request: ClinicDeleteRequestModel) {
    return this.httpExecute
      .exec<ClinicDeleteResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicDelete, request },
      })
      .pipe(take(1))
  }
}
