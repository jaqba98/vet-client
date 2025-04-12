import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import {
  ActionTypeEnum,
  AppointmentTableFormType,
  baseTableFormDeleteAction,
  baseTableFormMaxPageAction,
  baseTableFormRowsAction, baseTableFormUpdateRow, baseTableFormUpdateSelectedRow,
} from '@vet-client/lib-store'
import {
  AppointmentDataModel,
  AppointmentDomainModel,
  AppointmentMetadataModel,
  AppointmentRequestModel,
  DeleteDomainModel,
  DeleteRequestModel,
  ResponseModel,
  TokenRequestModel,
} from '@vet-client/lib-domain'
import { AppointmentNotification } from '../../../notification/domain/dependent/appointment.notification'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class AppointmentHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private appointment: AppointmentNotification,
    private store: Store<AppointmentTableFormType>,
  ) {}

  createAppointmentPost(domain: AppointmentDomainModel) {
    const request: AppointmentRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<AppointmentDataModel, AppointmentMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.appointmentCreate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.appointment.runResponseCreate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  readAppointmentPost() {
    const request: TokenRequestModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<AppointmentDataModel, AppointmentMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.appointmentRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(
            baseTableFormRowsAction<AppointmentDomainModel, AppointmentMetadataModel>(ActionTypeEnum.appointment)({
              rows: res.data.appointments.map(row => ({
                id: row.id,
                isSelected: false,
                data: row,
              })),
              metadata: res.metadata,
            }),
          )
          this.store.dispatch(
            baseTableFormMaxPageAction(ActionTypeEnum.appointment)(),
          )
        }),
      )
  }

  updateAppointmentPost(domain: AppointmentDomainModel) {
    const request: AppointmentRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<AppointmentDataModel, AppointmentMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.appointmentUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(
            baseTableFormUpdateRow<AppointmentDomainModel>(ActionTypeEnum.appointment)({
              row: {
                id: res.data.appointments[0].id,
                isSelected: false,
                data: res.data.appointments[0],
              },
            }),
          )
          this.store.dispatch(
            baseTableFormUpdateSelectedRow<AppointmentDomainModel>(ActionTypeEnum.appointment)({
              row: {
                id: res.data.appointments[0].id,
                isSelected: false,
                data: res.data.appointments[0],
              },
            }),
          )
          this.appointment.runResponseUpdate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  deleteAppointmentPost(domain: DeleteDomainModel) {
    const request: DeleteRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<AppointmentDataModel, AppointmentMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.appointmentDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          this.store.dispatch(baseTableFormDeleteAction(ActionTypeEnum.appointment)({ ids: domain.ids }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.appointment)())
        }),
      )
  }
}
