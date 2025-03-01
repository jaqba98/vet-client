import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';

import { HttpExecuteService } from '../infrastructure/http-execute.service';
import { MethodEnum } from '../enum/method.enum';
import { EndpointEnum } from '../enum/endpoint.enum';
import { AuthRequestModel } from '../model/request/auth-request.model';
import { AuthResponseModel } from '../model/response/auth-response.model';
import { ChooseRoleRequestModel } from '../model/request/choose-role-request.model';
import { ChooseRoleResponseModel } from '../model/response/choose-role-response.model';
import { HasRoleRequestModel } from '../model/request/has-role-request.model';
import { HasRoleResponseModel } from '../model/response/has-role-response.model';
import { IsClientRequestModel } from '../model/request/is-client-request.model';
import { IsClientResponseModel } from '../model/response/is-client-response.model';
import { IsVetRequestModel } from '../model/request/is-vet-request.model';
import { IsVetResponseModel } from '../model/response/is-vet-response.model';
import { LoginRequestModel } from '../model/request/login-request.model';
import { LoginResponseModel } from '../model/response/login-response.model';
import { LogoutRequestModel } from '../model/request/logout-request.model';
import { LogoutResponseModel } from '../model/response/logout-response.model';
import { RegistrationRequestModel } from '../model/request/registration-request.model';
import { RegistrationResponseModel } from '../model/response/registration-response.model';

@Injectable({ providedIn: 'root' })
export class HttpPostAppService {
  constructor(private readonly httpExecute: HttpExecuteService) {}

  authPost<T>(request: AuthRequestModel, fn: (response: AuthResponseModel) => T) {
    return this.httpExecute
      .exec<AuthResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.auth, request } })
      .pipe(
        take(1),
        map(res => fn(res))
      );
  }

  chooseRolePost(request: ChooseRoleRequestModel) {
    return this.httpExecute
      .exec<ChooseRoleResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.chooseRole, request } })
      .pipe(take(1));
  }

  hasRolePost<T>(request: HasRoleRequestModel, fn: (response: HasRoleResponseModel) => T) {
    return this.httpExecute
      .exec<HasRoleResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.hasRole, request } })
      .pipe(
        take(1),
        map(res => fn(res))
      );
  }

  isClientPost<T>(request: IsClientRequestModel, fn: (response: IsClientResponseModel) => T)  {
    return this.httpExecute
      .exec<IsClientResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.isClient, request } })
      .pipe(
        take(1),
        map(res => fn(res))
      );
  }

  isVetPost<T>(request: IsVetRequestModel, fn: (response: IsClientResponseModel) => T) {
    return this.httpExecute
      .exec<IsVetResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.isVet, request } })
      .pipe(
        take(1),
        map(res => fn(res))
      );
  }

  loginPost<T>(request: LoginRequestModel, fn: (response: LoginResponseModel) => T) {
    return this.httpExecute
      .exec<LoginResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.login, request } })
      .pipe(
        take(1),
        map(res => fn(res))
      );
  }

  logoutPost<T>(request: LogoutRequestModel, fn: (response: LogoutResponseModel) => T) {
    return this.httpExecute
      .exec<LogoutResponseModel>({ method: MethodEnum.post, type: { endpoint: EndpointEnum.logout, request } })
      .pipe(
        take(1),
        map(res => fn(res))
      );
  }

  registrationPost(request: RegistrationRequestModel): Observable<RegistrationResponseModel> {
    return this.httpExecute
      .exec<RegistrationResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.registration, request }
      })
      .pipe(take(1));
  }
}
