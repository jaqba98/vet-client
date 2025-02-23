import { Injectable } from '@angular/core';

import { HttpModel } from '../model/http.model';
import { PostService } from './post.service';
import { HttpMethod } from '../enum/http-method.enum';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private readonly post: PostService) {
  }

  execute(model: HttpModel) {
    switch (model.kind) {
      case HttpMethod.post:
        this.post.execute(model.type);
        break;
      default:
        throw new Error(`Unsupported kind ${model.kind}`);
    }
  }
}
