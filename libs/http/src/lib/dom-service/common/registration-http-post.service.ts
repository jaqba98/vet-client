import { Injectable } from '@angular/core'
import { take } from 'rxjs'

import { RegistrationDomainModel } from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { RegistrationRequestDtoModel } from '../../model/request/controller/registration-request-dto.model'
import { ResponseDtoModel } from '../../model/response/response-dto.model'

@Injectable({ providedIn: 'root' })
export class RegistrationHttpPostService {
  constructor(private httpExecute: HttpExecuteService) {}

  registrationPost(domain: RegistrationDomainModel) {
    const request: RegistrationRequestDtoModel = { ...domain }
    return this.httpExecute
      .exec<ResponseDtoModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.registration, request },
      })
      .pipe(take(1))
  }
}
