import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import {
  ActionTypeEnum, baseTableFormDeleteAction, baseTableFormMaxPageAction,
  baseTableFormRowsAction,
  ServiceClinicTableFormType,
} from '@vet-client/lib-store'
import {
  DeleteDomainModel,
  DeleteRequestModel,
  ResponseModel,
  ServiceClinicDataModel,
  ServiceClinicDomainModel,
  ServiceClinicMetadataModel,
  ServiceClinicRequestModel,
  TokenRequestModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { ServiceClinicNotification } from '../../../notification/domain/dependent/service-clinic.notification'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class ServiceClinicHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private service: ServiceClinicNotification,
    private store: Store<ServiceClinicTableFormType>,
  ) {}

  createServicePost(domain: ServiceClinicDomainModel) {
    const request: ServiceClinicRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<ServiceClinicDataModel, ServiceClinicMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.serviceClinicCreate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.service.runResponseCreate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  readServicePost() {
    const request: TokenRequestModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<ServiceClinicDataModel, ServiceClinicMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.serviceClinicRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormRowsAction<ServiceClinicDomainModel, ServiceClinicMetadataModel>(ActionTypeEnum.serviceClinic)({
            rows: res.data.serviceClinics.map(row => ({ id: row.id, isSelected: false, data: row })),
            metadata: res.metadata,
          }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.serviceClinic)())
        }),
      )
  }

  updateServicePost(domain: ServiceClinicDomainModel) {
    const request: ServiceClinicRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<ServiceClinicDataModel, ServiceClinicMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.serviceClinicUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          // todo: Refactor it
          // this.store.dispatch(
          //   baseTableFormUpdateRow<ServiceDomainModel>(ActionTypeEnum.serviceClinic)({
          //     row: { id: res.data.serviceClinics[0].id, isSelected: false, row: res.data.serviceClinics[0] },
          //   }),
          // )
          // this.store.dispatch(
          //   baseTableFormUpdateSelectedRow<ServiceDomainModel>(
          //     ActionTypeEnum.serviceClinic,
          //   )({
          //     row: { id: res.data.serviceClinics[0].id, isSelected: false, row: res.data.serviceClinics[0] },
          //   }),
          // )
          // this.service.runResponseUpdate({
          //   success: res.success,
          //   message: res.messages[0],
          // })
        }),
      )
  }

  deleteServicePost(domain: DeleteDomainModel) {
    const request: DeleteRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<ServiceClinicDataModel, ServiceClinicMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.serviceClinicDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          this.store.dispatch(baseTableFormDeleteAction(ActionTypeEnum.serviceClinic)({ ids: domain.ids }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.serviceClinic)())
        }),
      )
  }
}
