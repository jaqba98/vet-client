import { Injectable } from '@angular/core'
import { take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { GuardRequestDtoModel } from '../../model/request/guard/guard-request-dto.model'
import { ResponseDtoModel } from '../../model/response/response-dto.model'

@Injectable({ providedIn: 'root' })
export class ValidTokenHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
  ) {}

  validTokenPost() {
    const request: GuardRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseDtoModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.validToken, request },
      })
      .pipe(take(1))
  }
}
