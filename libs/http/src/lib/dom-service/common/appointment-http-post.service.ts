import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import {
  AppointmentDomainModel,
  DeleteDomainModel,
} from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import {
  ActionTypeEnum,
  AppointmentTableFormType,
  baseTableFormDeleteAction,
  baseTableFormMaxPageAction,
  baseTableFormRowsAction,
  baseTableFormUpdateRow,
  baseTableFormUpdateSelectedRow,
} from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { ResponseModel } from '../../model/response/response.model'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { MethodEnum } from '../../enum/method.enum'
import { DeleteRequestDtoModel } from '../../model/request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../model/base/token-request-dto.model'
import { AppointmentNotification } from '../../notification/appointment.notification'
import { AppointmentRequestDtoModel } from '../../model/request/controller/appointment-request-dto.model'

@Injectable({ providedIn: 'root' })
export class AppointmentHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private appointment: AppointmentNotification,
    private store: Store<AppointmentTableFormType>,
  ) {}

  createAppointmentPost(domain: AppointmentDomainModel) {
    const request: AppointmentRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.appointmentCreate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.appointment.runResponseCreate({
            success: res.success,
            message: res.messages[0],
          })
        }),
      )
  }

  readAppointmentPost() {
    const request: TokenRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<{ appointments: AppointmentDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.appointmentRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(
            baseTableFormRowsAction<AppointmentDomainModel>(
              ActionTypeEnum.appointment,
            )({
              rows: res.data.appointments.map(row => ({
                id: row.id,
                isSelected: false,
                row,
              })),
            }),
          )
          this.store.dispatch(
            baseTableFormMaxPageAction(ActionTypeEnum.appointment)(),
          )
        }),
      )
  }

  updateAppointmentPost(domain: AppointmentDomainModel) {
    const request: AppointmentRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<{ appointments: AppointmentDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.appointmentUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(
            baseTableFormUpdateRow<AppointmentDomainModel>(
              ActionTypeEnum.appointment,
            )({
              row: {
                id: res.data.appointments[0].id,
                isSelected: false,
                row: res.data.appointments[0],
              },
            }),
          )
          this.store.dispatch(
            baseTableFormUpdateSelectedRow<AppointmentDomainModel>(
              ActionTypeEnum.appointment,
            )({
              row: {
                id: res.data.appointments[0].id,
                isSelected: false,
                row: res.data.appointments[0],
              },
            }),
          )
          this.appointment.runResponseUpdate({
            success: res.success,
            message: res.messages[0],
          })
        }),
      )
  }

  deleteAppointmentPost(domain: DeleteDomainModel) {
    const request: DeleteRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.appointmentDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          this.store.dispatch(
            baseTableFormDeleteAction(ActionTypeEnum.appointment)({
              ids: domain.ids,
            }),
          )
          this.store.dispatch(
            baseTableFormMaxPageAction(ActionTypeEnum.appointment)(),
          )
        }),
      )
  }
}
