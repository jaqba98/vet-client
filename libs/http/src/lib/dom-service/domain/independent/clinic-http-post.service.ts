import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import {
  ActionTypeEnum,
  baseTableFormDeleteAction,
  baseTableFormMaxPageAction,
  baseTableFormRowsAction,
  baseTableFormUpdateRow, baseTableFormUpdateSelectedRow,
  ClinicTableFormType,
} from '@vet-client/lib-store'
import {
  ClinicDataModel,
  ClinicDomainModel,
  ClinicMetadataModel,
  ClinicRequestModel,
  DeleteDomainModel,
  DeleteRequestModel,
  ResponseModel,
  TokenRequestModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { ClinicNotification } from '../../../notification/domain/independent/clinic.notification'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class ClinicHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private clinic: ClinicNotification,
    private store: Store<ClinicTableFormType>,
  ) {}

  createClinicPost(domain: ClinicDomainModel) {
    const request: ClinicRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<ClinicDataModel, ClinicMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicCreate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.clinic.runResponseCreate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  readClinicPost() {
    const request: TokenRequestModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<ClinicDataModel, ClinicMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormRowsAction<ClinicDomainModel, ClinicMetadataModel>(ActionTypeEnum.clinic)({
            rows: res.data.clinics.map(row => ({ id: row.id, isSelected: false, data: row })),
            metadata: res.metadata,
          }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.clinic)())
        }),
      )
  }

  updateClinicPost(domain: ClinicDomainModel) {
    const request: ClinicRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<ClinicDataModel, ClinicMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormUpdateRow<ClinicDomainModel>(ActionTypeEnum.clinic)({
            row: { id: res.data.clinics[0].id, isSelected: false, data: res.data.clinics[0] },
          }))
          this.store.dispatch(baseTableFormUpdateSelectedRow<ClinicDomainModel>(ActionTypeEnum.clinic)({
            row: { id: res.data.clinics[0].id, isSelected: false, data: res.data.clinics[0] },
          }))
          this.clinic.runResponseUpdate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  deleteClinicPost(domain: DeleteDomainModel) {
    const request: DeleteRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<ClinicDataModel, ClinicMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          this.store.dispatch(baseTableFormDeleteAction(ActionTypeEnum.clinic)({ ids: domain.ids }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.clinic)())
        }),
      )
  }
}
