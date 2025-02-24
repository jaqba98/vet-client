import { Injectable } from '@angular/core';

import { HttpModel } from '../model/http.model';
import { HttpMethodEnum } from '../enum/http-method.enum';
import { HttpUtil } from '../util/http.util';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private readonly http: HttpUtil) {
  }

  execute<T>(model: HttpModel) {
    switch (model.method) {
      case HttpMethodEnum.post:
        return this.http.post<T>(model.type);
      default:
        throw new Error(`Unsupported kind ${model.method}`);
    }
  }
}
