import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { ClientTableFormType } from '@vet-client/lib-store'
import {
  ClientDataModel,
  ClientDomainModel,
  ClientMetadataModel,
  ClientRequestModel,
  DeleteDomainModel,
  DeleteRequestModel,
  ResponseModel,
  TokenRequestModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { ClientNotification } from '../../../notification/domain/dependent/client.notification'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class ClientHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private client: ClientNotification,
    private store: Store<ClientTableFormType>,
  ) {}

  createClientPost(domain: ClientDomainModel) {
    const request: ClientRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<ClientDataModel, ClientMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clientCreate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.client.runResponseCreate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  readClientPost() {
    const request: TokenRequestModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<ClientDataModel, ClientMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clientRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          // todo: Refactor it
          // this.store.dispatch(baseTableFormRowsAction<ClientDomainModel>(ActionTypeEnum.client)({
          //   rows: res.data.clients.map(row => ({ id: row.id, isSelected: false, row })),
          // }))
          // this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.client)())
        }),
      )
  }

  updateClientPost(domain: ClientDomainModel) {
    const request: ClientRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<ClientDataModel, ClientMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clientUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          // todo: Refactor it
          // this.store.dispatch(
          //   baseTableFormUpdateRow<ClientDomainModel>(ActionTypeEnum.client)({
          //     row: { id: res.data.clients[0].id, isSelected: false, row: res.data.clients[0] },
          //   }),
          // )
          // this.store.dispatch(
          //   baseTableFormUpdateSelectedRow<ClientDomainModel>(
          //     ActionTypeEnum.client,
          //   )({
          //     row: { id: res.data.clients[0].id, isSelected: false, row: res.data.clients[0] },
          //   }),
          // )
          // this.client.runResponseUpdate({
          //   success: res.success,
          //   message: res.messages[0],
          // })
        }),
      )
  }

  deleteClientPost(domain: DeleteDomainModel) {
    const request: DeleteRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<ClientDataModel, ClientMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clientDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          // todo: Refactor it
          // this.store.dispatch(baseTableFormDeleteAction(ActionTypeEnum.client)({ ids: domain.ids }))
          // this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.client)())
        }),
      )
  }
}
