import { Injectable } from '@angular/core';

import { HttpModel } from '../model/http.model';
import { PostService } from './post.service';
import { HttpMethodEnum } from '../enum/http-method.enum';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private readonly post: PostService) {
  }

  execute(model: HttpModel) {
    switch (model.method) {
      case HttpMethodEnum.post:
        return this.post.execute(model.type);
      default:
        throw new Error(`Unsupported kind ${model.method}`);
    }
  }
}
