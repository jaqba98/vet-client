import { HttpMethodEnum } from '../enum/http-method.enum';
import { HttpEndpointEnum } from '../enum/http-endpoint.enum';
import {
  AuthPostHttpRequestModel, ChooseRolePostHttpRequestModel, HasRolePostHttpRequestModel,
  LoginPostHttpRequestModel,
  LogoutPostHttpRequestModel,
  RegistrationPostHttpRequestModel
} from './http-request.model';

interface LoginHttpPostModel {
  endpoint: HttpEndpointEnum.login;
  request: LoginPostHttpRequestModel;
}

interface RegistrationHttpPostModel {
  endpoint: HttpEndpointEnum.registration;
  request: RegistrationPostHttpRequestModel;
}

interface AuthHttpPostModel {
  endpoint: HttpEndpointEnum.auth;
  request: AuthPostHttpRequestModel;
}

interface LogoutHttpPostModel {
  endpoint: HttpEndpointEnum.logout;
  request: LogoutPostHttpRequestModel;
}

interface HasRoleHttpPostModel {
  endpoint: HttpEndpointEnum.hasRole;
  request: HasRolePostHttpRequestModel;
}

interface ChooseRoleHttpPostModel {
  endpoint: HttpEndpointEnum.chooseRole;
  request: ChooseRolePostHttpRequestModel;
}

export type HttpPostType =
  LoginHttpPostModel |
  RegistrationHttpPostModel |
  AuthHttpPostModel |
  LogoutHttpPostModel |
  HasRoleHttpPostModel |
  ChooseRoleHttpPostModel;

export interface HttpPostModel {
  method: HttpMethodEnum.post;
  type: HttpPostType;
}
