import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import {
  ActionTypeEnum,
  baseTableFormDeleteAction,
  baseTableFormMaxPageAction,
  baseTableFormRowsAction,
  baseTableFormUpdateRow,
  baseTableFormUpdateSelectedRow,
  MedicalRecordTableFormType,
} from '@vet-client/lib-store'
import {
  DeleteDomainModel,
  DeleteRequestModel,
  MedicalRecordDataModel,
  MedicalRecordDomainModel,
  MedicalRecordMetadataModel,
  MedicalRecordRequestModel,
  ResponseModel,
  TokenRequestModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { MedicalRecordNotification } from '../../../notification/domain/dependent/medical-record.notification'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class MedicalRecordHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private medicalRecord: MedicalRecordNotification,
    private store: Store<MedicalRecordTableFormType>,
  ) {}

  createMedicalRecordPost(domain: MedicalRecordDomainModel) {
    const request: MedicalRecordRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<MedicalRecordDataModel, MedicalRecordMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.medicalRecordCreate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.medicalRecord.runResponseCreate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  readMedicalRecordPost() {
    const request: TokenRequestModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<MedicalRecordDataModel, MedicalRecordMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.medicalRecordRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormRowsAction<MedicalRecordDomainModel, MedicalRecordMetadataModel>(ActionTypeEnum.medicalRecord)({
            rows: res.data.medicalRecords.map(row => ({ id: row.id, isSelected: false, data: row })),
            metadata: res.metadata,
          }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.medicalRecord)())
        }),
      )
  }

  updateMedicalRecordPost(domain: MedicalRecordDomainModel) {
    const request: MedicalRecordRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<MedicalRecordDataModel, MedicalRecordMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.medicalRecordUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormUpdateRow<MedicalRecordDomainModel>(ActionTypeEnum.medicalRecord)({
            row: { id: res.data.medicalRecords[0].id, isSelected: false, data: res.data.medicalRecords[0] },
          }))
          this.store.dispatch(baseTableFormUpdateSelectedRow<MedicalRecordDomainModel>(ActionTypeEnum.medicalRecord)({
            row: { id: res.data.medicalRecords[0].id, isSelected: false, data: res.data.medicalRecords[0] },
          }))
          this.medicalRecord.runResponseUpdate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  deleteMedicalRecordPost(domain: DeleteDomainModel) {
    const request: DeleteRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<MedicalRecordDataModel, MedicalRecordMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.medicationDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          this.store.dispatch(baseTableFormDeleteAction(ActionTypeEnum.medicalRecord)({ ids: domain.ids }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.medicalRecord)())
        }),
      )
  }
}
