import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'

import {
  RegistrationDataModel,
  RegistrationDomainModel,
  RegistrationMetadataModel,
  RegistrationRequestModel,
  ResponseModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { RegistrationNotification } from '../../../notification/domain/logic/registration.notification'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class RegistrationHttpPostService {
  constructor(
    private httpExecute: HttpExecuteService,
    private registration: RegistrationNotification,
  ) {}

  registrationPost(domain: RegistrationDomainModel) {
    const request: RegistrationRequestModel = { ...domain }
    return this.httpExecute
      .exec<ResponseModel<RegistrationDataModel, RegistrationMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.registration, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.registration.runResponse({ success: res.success, message: res.messages[0] })
        }),
      )
  }
}
