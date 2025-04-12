import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import {
  ActionTypeEnum, baseTableFormMaxPageAction,
  baseTableFormRowsAction,
  MedicationTableFormType,
} from '@vet-client/lib-store'
import {
  DeleteDomainModel, DeleteRequestModel,
  MedicationDataModel,
  MedicationDomainModel,
  MedicationMetadataModel,
  MedicationRequestModel,
  ResponseModel,
  TokenRequestModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { MedicationNotification } from '../../../notification/domain/dependent/medication.notification'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class MedicationHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private medication: MedicationNotification,
    private store: Store<MedicationTableFormType>,
  ) {}

  createMedicationPost(domain: MedicationDomainModel) {
    const request: MedicationRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<MedicationDataModel, MedicationMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.medicationCreate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.medication.runResponseCreate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  readMedicationPost() {
    const request: TokenRequestModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<MedicationDataModel, MedicationMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.medicationRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormRowsAction<MedicationDomainModel, MedicationMetadataModel>(ActionTypeEnum.medication)({
            rows: res.data.medications.map(row => ({
              id: row.id,
              isSelected: false,
              data: row,
            })),
            metadata: res.metadata,
          }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.medication)())
        }),
      )
  }

  updateMedicationPost(domain: MedicationDomainModel) {
    const request: MedicationRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<MedicationDataModel, MedicationMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.medicationUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          // todo: Refactor it
          // this.store.dispatch(
          //   baseTableFormUpdateRow<MedicationDomainModel>(
          //     ActionTypeEnum.medication,
          //   )({
          //     row: {
          //       id: res.data.medications[0].id,
          //       isSelected: false,
          //       row: res.data.medications[0],
          //     },
          //   }),
          // )
          // this.store.dispatch(
          //   baseTableFormUpdateSelectedRow<MedicationDomainModel>(
          //     ActionTypeEnum.medication,
          //   )({
          //     row: {
          //       id: res.data.medications[0].id,
          //       isSelected: false,
          //       row: res.data.medications[0],
          //     },
          //   }),
          // )
          // this.medication.runResponseUpdate({
          //   success: res.success,
          //   message: res.messages[0],
          // })
        }),
      )
  }

  deleteMedicationPost(domain: DeleteDomainModel) {
    const request: DeleteRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<MedicationDataModel, MedicationMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.medicationDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          // todo: Refactor it
          // this.store.dispatch(
          //   baseTableFormDeleteAction(ActionTypeEnum.medication)({
          //     ids: domain.ids,
          //   }),
          // )
          // this.store.dispatch(
          //   baseTableFormMaxPageAction(ActionTypeEnum.medication)(),
          // )
        }),
      )
  }
}
