import { Injectable } from '@angular/core'
import { take } from 'rxjs'

import { LoginDomainDataModel } from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { LoginRequestDtoModel } from '../../model/request/controller/login-request-dto.model'
import { ResponseDataDtoModel } from '../../model/response/response-data-dto.model'

@Injectable({ providedIn: 'root' })
export class LoginHttpPostService {
  constructor(private readonly httpExecute: HttpExecuteService) {}

  loginPost(domain: LoginDomainDataModel) {
    const request: LoginRequestDtoModel = { ...domain }
    return this.httpExecute
      .exec<ResponseDataDtoModel<string>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.login, request },
      })
      .pipe(take(1))
  }
}
