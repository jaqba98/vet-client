import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { ActionTypeEnum, baseFormAction, VetFormType } from '@vet-client/lib-store'
import {
  ResponseModel,
  TokenRequestModel,
  VetDataModel,
  VetDomainModel,
  VetMetadataModel, VetRequestModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { VetNotification } from '../../../notification/domain/dependent/vet.notification'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class VetHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private vet: VetNotification,
    private store: Store<VetFormType>,
  ) {}

  readVetPost() {
    const request: TokenRequestModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<VetDataModel, VetMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.vetRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseFormAction<VetDomainModel, VetMetadataModel>(ActionTypeEnum.vet)({
            data: res.data.vets[0],
            metadata: res.metadata,
          }))
        }),
      )
  }

  updateVetPost(domain: VetDomainModel) {
    const request: VetRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<VetDataModel, VetMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.vetUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseFormAction<VetDomainModel, VetMetadataModel>(ActionTypeEnum.vet)({
            data: res.data.vets[0],
            metadata: res.metadata,
          }))
          this.vet.runResponseUpdate({ success: res.success, message: res.messages[0] })
        }),
      )
  }
}
