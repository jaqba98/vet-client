import { HttpMethodEnum } from '../enum/http-method.enum';
import { HttpEndpointEnum } from '../enum/http-endpoint.enum';
import {
  AuthPostHttpRequestModel,
  LoginPostHttpRequestModel,
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

export type HttpPostType = LoginHttpPostModel | RegistrationHttpPostModel | AuthHttpPostModel;

export interface HttpPostModel {
  method: HttpMethodEnum.post;
  type: HttpPostType;
}
