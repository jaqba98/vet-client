import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { DeleteDomainModel, MedicalRecordDomainModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import {
  baseTableFormRowsAction,
  baseTableFormDeleteAction,
  baseTableFormUpdateRow,
  baseTableFormUpdateSelectedRow,
  baseTableFormMaxPageAction, ActionTypeEnum, MedicalRecordTableFormType,
} from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { ResponseModel } from '../../model/response/response.model'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { MethodEnum } from '../../enum/method.enum'
import { DeleteRequestDtoModel } from '../../model/request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../model/base/token-request-dto.model'
import { MedicalRecordNotification } from '../../notification/medical-record.notification'
import { MedicalRecordRequestDtoModel } from '../../model/request/controller/medical-record-request-dto.model'

@Injectable({ providedIn: 'root' })
export class MedicalRecordHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private medicalRecord: MedicalRecordNotification,
    private store: Store<MedicalRecordTableFormType>,
  ) {}

  createMedicalRecordPost(domain: MedicalRecordDomainModel) {
    const request: MedicalRecordRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
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
    const request: TokenRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<{ medicalRecords: MedicalRecordDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.medicalRecordRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormRowsAction<MedicalRecordDomainModel>(ActionTypeEnum.medicalRecord)({
            rows: res.data.medicalRecords.map(row => ({ id: row.id, isSelected: false, row })),
          }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.medicalRecord)())
        }),
      )
  }

  updateMedicalRecordPost(domain: MedicalRecordDomainModel) {
    const request: MedicalRecordRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<{ medicalRecords: MedicalRecordDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.medicalRecordUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormUpdateRow<MedicalRecordDomainModel>(ActionTypeEnum.medicalRecord)({
            row: { id: res.data.medicalRecords[0].id, isSelected: false, row: res.data.medicalRecords[0] },
          }))
          this.store.dispatch(baseTableFormUpdateSelectedRow<MedicalRecordDomainModel>(ActionTypeEnum.medicalRecord)({
            row: { id: res.data.medicalRecords[0].id, isSelected: false, row: res.data.medicalRecords[0] },
          }))
          this.medicalRecord.runResponseUpdate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  deleteMedicalRecordPost(domain: DeleteDomainModel) {
    const request: DeleteRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
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
