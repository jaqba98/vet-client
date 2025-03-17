import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { RegistrationDomainResponseType } from '@vet-client/lib-store'
import { registrationDomainResponseSet } from '@vet-client/lib-store'
import { HttpExecuteService } from '../infrastructure/http-execute.service'
import { RegistrationRequestModel } from '../model/request/registration-request.model'
import { MethodEnum } from '../enum/method.enum'
import { EndpointEnum } from '../enum/endpoint.enum'
import { ResponseModel } from '../model/response/response.model'

@Injectable({ providedIn: 'root' })
export class AuthHttpPostService {
  constructor(
    private readonly httpExecute: HttpExecuteService,
    private readonly store: Store<RegistrationDomainResponseType>,
  ) {}

  registrationPost(request: RegistrationRequestModel) {
    return this.httpExecute
      .exec<ResponseModel<string>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.registration, request },
      })
      .pipe(
        take(1),
        map((response) => {
          this.store.dispatch(registrationDomainResponseSet({
            success: response.success,
            message: response.success ? response.data : response.errors[0],
          }))
        }),
      )
  }
}
