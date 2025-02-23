import { HttpMethodEnum } from '../enum/http-method.enum';
import { HttpEndpointEnum } from '../enum/http-endpoint.enum';
import { LoginPostHttpRequestModel } from './http-request.model';

interface LoginHttpPostModel {
  endpoint: HttpEndpointEnum.login;
  request: LoginPostHttpRequestModel;
}

export type HttpPostType = LoginHttpPostModel;

export interface HttpPostModel {
  method: HttpMethodEnum.post;
  type: HttpPostType;
}
