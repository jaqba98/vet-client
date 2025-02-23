import { HttpMethod } from '../enum/http-method.enum';
import { HttpEndpoint } from '../enum/http-endpoint.enum';
import { LoginPostHttpDtoModel } from './http-dto.model';

interface LoginHttpPostModel {
  kind: HttpEndpoint.login;
  dto: LoginPostHttpDtoModel;
}

export type HttpPostType = LoginHttpPostModel;

export interface HttpPostModel {
  kind: HttpMethod.post;
  type: HttpPostType;
}
