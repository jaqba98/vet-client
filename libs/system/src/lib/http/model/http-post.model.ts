import { HttpMethodEnum } from '../enum/http-method.enum';
import { HttpEndpointEnum } from '../enum/http-endpoint.enum';
import { LoginPostHttpRequestModel, RegistrationPostHttpRequestModel } from './http-request.model';

interface LoginHttpPostModel {
  endpoint: HttpEndpointEnum.login;
  request: LoginPostHttpRequestModel;
}

interface RegistrationHttpPostModel {
  endpoint: HttpEndpointEnum.registration;
  request: RegistrationPostHttpRequestModel;
}

export type HttpPostType = LoginHttpPostModel | RegistrationHttpPostModel;

export interface HttpPostModel {
  method: HttpMethodEnum.post;
  type: HttpPostType;
}
