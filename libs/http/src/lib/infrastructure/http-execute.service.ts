import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpType } from '../model/http.model';
import { MethodEnum } from '../enum/method.enum';
import { EndpointEnum } from '../enum/endpoint.enum';

@Injectable({ providedIn: 'root' })
export class HttpExecuteService {
  constructor(private readonly http: HttpClient) {
  }

  exec<TResponse>(type: HttpType): Observable<TResponse> {
    const apiUrl = this.buildApiUrl(type.type.endpoint);
    switch (type.method) {
      case MethodEnum.post:
        return this.http.post<TResponse>(apiUrl, type.type.request);
      default:
        throw new Error(`Unsupported method ${type.method}`);
    }
  }

  private buildApiUrl(endpoint: EndpointEnum) {
    return `http://localhost:8080/api/v1/${endpoint}`;
  }
}
