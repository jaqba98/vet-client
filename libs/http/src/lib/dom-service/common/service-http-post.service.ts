import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { DeleteDomainModel, ServiceDomainModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import {
  baseTableFormRowsAction,
  baseTableFormDeleteAction,
  baseTableFormUpdateRow,
  baseTableFormUpdateSelectedRow,
  baseTableFormMaxPageAction, ActionTypeEnum, ServiceTableFormType,
} from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { ResponseModel } from '../../model/response/response.model'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { MethodEnum } from '../../enum/method.enum'
import { DeleteRequestDtoModel } from '../../model/request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../model/base/token-request-dto.model'
import { ServiceRequestDtoModel } from '../../model/request/controller/service-request-dto.model'
import { ServiceNotification } from '../../notification/service.notification'

@Injectable({ providedIn: 'root' })
export class ServiceHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private service: ServiceNotification,
    private store: Store<ServiceTableFormType>,
  ) {}

  createServicePost(domain: ServiceDomainModel) {
    const request: ServiceRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.vetServiceCreate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.service.runResponseCreate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  readServicePost() {
    const request: TokenRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<{ vetServices: ServiceDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.vetServiceRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormRowsAction<ServiceDomainModel>(ActionTypeEnum.service)({
            rows: res.data.vetServices.map(row => ({ id: row.id, isSelected: false, row })),
          }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.service)())
        }),
      )
  }

  updateServicePost(domain: ServiceDomainModel) {
    const request: ServiceRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<{ vetService: ServiceDomainModel }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.vetServiceUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(
            baseTableFormUpdateRow<ServiceDomainModel>(ActionTypeEnum.service)({
              row: { id: res.data.vetService.id, isSelected: false, row: res.data.vetService },
            }),
          )
          this.store.dispatch(
            baseTableFormUpdateSelectedRow<ServiceDomainModel>(
              ActionTypeEnum.service,
            )({
              row: { id: res.data.vetService.id, isSelected: false, row: res.data.vetService },
            }),
          )
          this.service.runResponseUpdate({
            success: res.success,
            message: res.messages[0],
          })
        }),
      )
  }

  deleteServicePost(domain: DeleteDomainModel) {
    const request: DeleteRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.vetServiceDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          this.store.dispatch(baseTableFormDeleteAction(ActionTypeEnum.service)({ ids: domain.ids }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.service)())
        }),
      )
  }
}
