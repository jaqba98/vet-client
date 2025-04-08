import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { VetDomainModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import { ActionTypeEnum, VetFormType } from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { ResponseModel } from '../../model/response/response.model'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { MethodEnum } from '../../enum/method.enum'
import { TokenRequestDtoModel } from '../../model/base/token-request-dto.model'
import { VetNotification } from '../../notification/vet.notification'
import { baseFormAction } from '@vet-client/lib-store'
import { VetRequestDtoModel } from '../../model/request/controller/vet-request-dto.model'

@Injectable({ providedIn: 'root' })
export class VetHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private vet: VetNotification,
    private store: Store<VetFormType>,
  ) {}

  readVetPost() {
    const request: TokenRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<{ vets: VetDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.vetRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseFormAction<VetDomainModel>(ActionTypeEnum.vet)({
            form: res.data.vets[0],
          }))
        }),
      )
  }

  updateVetPost(domain: VetDomainModel) {
    const request: VetRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<{ vet: VetDomainModel }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.vetUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseFormAction<VetDomainModel>(ActionTypeEnum.vet)({
            form: res.data.vet,
          }))
          this.vet.runResponseUpdate({ success: res.success, message: res.messages[0] })
        }),
      )
  }
}
