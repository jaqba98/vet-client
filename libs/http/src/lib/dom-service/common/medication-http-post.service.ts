import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import {
  DeleteDomainModel,
  MedicationDomainModel,
} from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import {
  ActionTypeEnum,
  baseTableFormDeleteAction,
  baseTableFormMaxPageAction,
  baseTableFormRowsAction,
  baseTableFormUpdateRow,
  baseTableFormUpdateSelectedRow,
  MedicationTableFormType,
} from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { ResponseModel } from '../../model/response/response.model'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { MethodEnum } from '../../enum/method.enum'
import { DeleteRequestDtoModel } from '../../model/request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../model/base/token-request-dto.model'
import { MedicationNotification } from '../../notification/medication.notification'
import { MedicationRequestDtoModel } from '../../model/request/controller/medication-request-dto.model'

@Injectable({ providedIn: 'root' })
export class MedicationHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private medication: MedicationNotification,
    private store: Store<MedicationTableFormType>,
  ) {}

  createMedicationPost(domain: MedicationDomainModel) {
    const request: MedicationRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.medicationCreate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.medication.runResponseCreate({
            success: res.success,
            message: res.messages[0],
          })
        }),
      )
  }

  readMedicationPost() {
    const request: TokenRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<{ medications: MedicationDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.medicationRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(
            baseTableFormRowsAction<MedicationDomainModel>(
              ActionTypeEnum.medication,
            )({
              rows: res.data.medications.map(row => ({
                id: row.id,
                isSelected: false,
                row,
              })),
            }),
          )
          this.store.dispatch(
            baseTableFormMaxPageAction(ActionTypeEnum.medication)(),
          )
        }),
      )
  }

  updateMedicationPost(domain: MedicationDomainModel) {
    const request: MedicationRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<{ medications: MedicationDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.medicationUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(
            baseTableFormUpdateRow<MedicationDomainModel>(
              ActionTypeEnum.medication,
            )({
              row: {
                id: res.data.medications[0].id,
                isSelected: false,
                row: res.data.medications[0],
              },
            }),
          )
          this.store.dispatch(
            baseTableFormUpdateSelectedRow<MedicationDomainModel>(
              ActionTypeEnum.medication,
            )({
              row: {
                id: res.data.medications[0].id,
                isSelected: false,
                row: res.data.medications[0],
              },
            }),
          )
          this.medication.runResponseUpdate({
            success: res.success,
            message: res.messages[0],
          })
        }),
      )
  }

  deleteMedicationPost(domain: DeleteDomainModel) {
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
          this.store.dispatch(
            baseTableFormDeleteAction(ActionTypeEnum.medication)({
              ids: domain.ids,
            }),
          )
          this.store.dispatch(
            baseTableFormMaxPageAction(ActionTypeEnum.medication)(),
          )
        }),
      )
  }
}
