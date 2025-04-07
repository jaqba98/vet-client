import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { ClientDomainModel, DeleteDomainModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import {
  baseTableFormRowsAction,
  baseTableFormDeleteAction,
  baseTableFormUpdateRow,
  baseTableFormUpdateSelectedRow,
  baseTableFormMaxPageAction, ActionTypeEnum, ClientTableFormType,
} from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { ResponseModel } from '../../model/response/response.model'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { MethodEnum } from '../../enum/method.enum'
import { DeleteRequestDtoModel } from '../../model/request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../model/base/token-request-dto.model'
import { ClientNotification } from '../../notification/client.notification'
import { ClientRequestDtoModel } from '../../model/request/controller/client-request-dto.model'

@Injectable({ providedIn: 'root' })
export class ClientHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private client: ClientNotification,
    private store: Store<ClientTableFormType>,
  ) {}

  createClientPost(domain: ClientDomainModel) {
    const request: ClientRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
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
    const request: TokenRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<{ clients: ClientDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clientRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormRowsAction<ClientDomainModel>(ActionTypeEnum.client)({
            rows: res.data.clients.map(row => ({ id: row.id, isSelected: false, row })),
          }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.client)())
        }),
      )
  }

  updateClientPost(domain: ClientDomainModel) {
    const request: ClientRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<{ clients: ClientDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clientUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(
            baseTableFormUpdateRow<ClientDomainModel>(ActionTypeEnum.client)({
              row: { id: res.data.clients[0].id, isSelected: false, row: res.data.clients[0] },
            }),
          )
          this.store.dispatch(
            baseTableFormUpdateSelectedRow<ClientDomainModel>(
              ActionTypeEnum.client,
            )({
              row: { id: res.data.clients[0].id, isSelected: false, row: res.data.clients[0] },
            }),
          )
          this.client.runResponseUpdate({
            success: res.success,
            message: res.messages[0],
          })
        }),
      )
  }

  deleteClientPost(domain: DeleteDomainModel) {
    const request: DeleteRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clientDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          this.store.dispatch(baseTableFormDeleteAction(ActionTypeEnum.client)({ ids: domain.ids }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.client)())
        }),
      )
  }
}
