import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiUrl } from '../const/const';
import { EndpointEnum } from '../enum/endpoint.enum';

@Injectable({ providedIn: 'root' })
export class HttpService<TSelf> {
  constructor(private http: HttpClient) {}

  post<TBody, TResponse>(
    self: TSelf,
    endpoint: EndpointEnum,
    body: TBody,
    callback: (self: TSelf, response: TResponse) => void,
  ) {
    const url = apiUrl(endpoint);
    this.http
      .post<TResponse>(url, body)
      .subscribe((response) => callback(self, response));
  }
}
