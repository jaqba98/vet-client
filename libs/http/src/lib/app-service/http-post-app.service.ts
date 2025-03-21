import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'

import { HttpExecuteService } from '../infrastructure/http-execute.service'
import { MethodEnum } from '../enum/method.enum'
import { EndpointEnum } from '../enum/endpoint.enum'
import { GuardRequestDtoModel } from '../model/request/guard/guard-request-dto.model'
import { AuthResponseModel } from '../model/response/auth-response.model'
import { ChooseRoleRequestDtoModel } from '../model/request/controller/choose-role-request-dto.model'
import { ChooseRoleResponseModel } from '../model/response/choose-role-response.model'
import { HasRoleRequestModel } from '../model/request/has-role-request.model'
import { HasRoleResponseModel } from '../model/response/has-role-response.model'
import { IsClientRequestModel } from '../model/request/is-client-request.model'
import { IsClientResponseModel } from '../model/response/is-client-response.model'
import { IsVetRequestModel } from '../model/request/is-vet-request.model'
import { IsVetResponseModel } from '../model/response/is-vet-response.model'
import { LogoutRequestDtoModel } from '../model/request/controller/logout-request-dto.model'
import { LogoutResponseModel } from '../model/response/logout-response.model'
import { RegistrationRequestDtoModel } from '../model/request/controller/registration-request-dto.model'
import { GetAccountRequestModel } from '../model/request/get-account-request.model'
import { GetAccountResponseModel } from '../model/response/get-account-response.model'
import {
  ClinicUpdateRequestModel,
} from '../model/request/controller/clinic-request.model'
import {
  ClinicUpdateResponseModel,
} from '../model/response/clinic-response.model'
import { CookieService } from '@vet-client/lib-system'
import { Store } from '@ngrx/store'
import {
  LoginDomainResponseType,
  LogoutDomainDataType,
  RoutePageEnum,
  RouteSectionEnum, routeSetAction,
  RouteStoreType,
  setLogoutDomainData,
} from '@vet-client/lib-store'
import {
  ClinicDomainDataInternalModel,
  LoginDomainDataModel,
  LogoutDomainDataModel,
} from '@vet-client/lib-domain'
import { ClinicHttpPostService } from '../dom-service/clinic-http-post.service'
import { AuthHttpPostService } from '../dom-service/auth-http-post.service'

@Injectable({ providedIn: 'root' })
export class HttpPostAppService {
  constructor(
    private readonly authHttpPost: AuthHttpPostService,
    private readonly clinicHttpPost: ClinicHttpPostService,
    private readonly storeLoginDomainResponse: Store<LoginDomainResponseType>,
    private readonly storeLogoutDomainData: Store<LogoutDomainDataType>,
    private readonly httpExecute: HttpExecuteService,
    private cookie: CookieService,
    private storeRoute: Store<RouteStoreType>,
  ) {}

  authPost(request: GuardRequestDtoModel) {
    return this.httpExecute
      .exec<AuthResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.validToken, request } })
      .pipe(take(1))
  }

  chooseRolePost(request: ChooseRoleRequestDtoModel) {
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
    return this.authHttpPost.loginPost(data)
  }

  logoutPost(data: LogoutDomainDataModel) {
    const request: LogoutRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<LogoutResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.logout, request } })
      .pipe(
        take(1),
        map((response) => {
          if (response.success && data.logout) {
            this.cookie.deleteCookie('token')
            this.storeRoute.dispatch(routeSetAction({ page: RoutePageEnum.home, section: RouteSectionEnum.home }))
            this.storeLogoutDomainData.dispatch(setLogoutDomainData({ logout: false }))
          }
        }),
      )
  }

  registrationPost(request: RegistrationRequestDtoModel) {
    return this.authHttpPost.registrationPost(request)
  }

  getAccountPost(request: GetAccountRequestModel) {
    return this.httpExecute
      .exec<GetAccountResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.getAccount, request },
      })
      .pipe(take(1))
  }

  clinicCreatePost(clinic: ClinicDomainDataInternalModel) {
    return this.clinicHttpPost.clinicCreatePost(clinic)
  }

  clinicReadPost() {
    return this.clinicHttpPost.readPost()
  }

  clinicUpdatePost(request: ClinicUpdateRequestModel) {
    return this.httpExecute
      .exec<ClinicUpdateResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.vetClinicUpdate, request },
      })
      .pipe(take(1))
  }

  clinicDeletePost(ids: number[]) {
    return this.clinicHttpPost.deletePost(ids)
  }
}
