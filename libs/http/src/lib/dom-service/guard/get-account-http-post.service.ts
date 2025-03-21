import { Injectable } from '@angular/core'
import { take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { GuardRequestDtoModel } from '../../model/request/guard/guard-request-dto.model'
import { ResponseDataDtoModel } from '../../model/response/response-data-dto.model'
import { AccountDatabaseModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class GetAccountHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
  ) {}

  getAccountPost() {
    const request: GuardRequestDtoModel = { token: this.cookie.getToken() }
    return this.httpExecute
      .exec<ResponseDataDtoModel<AccountDatabaseModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.getAccount, request },
      })
      .pipe(take(1))
  }
}
