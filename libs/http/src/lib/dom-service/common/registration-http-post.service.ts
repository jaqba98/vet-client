import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'

import { RegistrationDomainModel } from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { RegistrationRequestDtoModel } from '../../model/request/controller/registration-request-dto.model'
import { ResponseModel } from '../../model/response/response.model'
import { RegistrationNotification } from '../../notification/registration.notification'

@Injectable({ providedIn: 'root' })
export class RegistrationHttpPostService {
  constructor(
    private httpExecute: HttpExecuteService,
    private registration: RegistrationNotification,
  ) {}

  registrationPost(domain: RegistrationDomainModel) {
    const request: RegistrationRequestDtoModel = { ...domain }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.registration, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.registration.runResponse({
            success: res.success,
            message: res.messages[0],
          })
        }),
      )
  }
}
