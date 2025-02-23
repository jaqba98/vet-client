import { Injectable } from '@angular/core';

import { HttpPostType } from '../model/http-post.model';
import { HttpEndpoint } from '../enum/http-endpoint.enum';

@Injectable({ providedIn: 'root' })
export class PostService {
  execute(type: HttpPostType) {
    switch (type.kind) {
      case HttpEndpoint.login:
        console.log(type.dto);
        break;
      default:
        throw new Error('Unsupported kind ' + type.kind);
    }
  }
}
