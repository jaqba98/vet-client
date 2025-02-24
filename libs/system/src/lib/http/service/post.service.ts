import { Injectable } from '@angular/core';

import { HttpPostType } from '../model/http-post.model';
import { HttpEndpointEnum } from '../enum/http-endpoint.enum';
import { HttpUtil } from '../util/http.util';
import { LoginPostHttpResponseModel, RegistrationPostHttpResponseModel } from '../model/http-response.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private readonly http: HttpUtil) {}

  execute(type: HttpPostType) {
    switch (type.endpoint) {
      case HttpEndpointEnum.login:
        return this.http.post<LoginPostHttpResponseModel>(type);
      case HttpEndpointEnum.registration:
        return this.http.post<RegistrationPostHttpResponseModel>(type);
      default:
        throw new Error('Unsupported kind!');
    }
  }
}
