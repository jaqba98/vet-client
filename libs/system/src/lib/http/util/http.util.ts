import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { HttpPostType } from '../model/http-post.model';
import { HttpEndpointEnum } from '../enum/http-endpoint.enum';

@Injectable({ providedIn: 'root' })
export class HttpUtil {
  private readonly apiUrl = 'http://localhost:8080/api/v1/';

  constructor(private readonly http: HttpClient) {
  }

  post<TResponse>(type: HttpPostType) {
    return this.http.post<TResponse>(this.createApiUrl(type.endpoint), type.request);
  }

  private createApiUrl(endpoint: HttpEndpointEnum) {
    return this.apiUrl + endpoint;
  }
}
