import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { OpeningHoursDomainModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import {
  baseTableFormRowsAction,
  baseTableFormUpdateRow,
  baseTableFormUpdateSelectedRow,
  ClinicTableFormType,
  baseTableFormMaxPageAction,
  ActionTypeEnum,
} from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { MethodEnum } from '../../enum/method.enum'
import { TokenRequestDtoModel } from '../../model/base/token-request-dto.model'
import { VetClinicOpeningHoursNotification } from '../../notification/vet-clinic-opening-hours.notification'
import { ClinicOpeningHoursRequestDtoModel } from '../../model/request/controller/clinic-opening-hours-request-dto.model'
import { ResponseModel } from '../../model/response/response.model'

@Injectable({ providedIn: 'root' })
export class ClinicOpeningHoursHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private vetClinicOpeningHours: VetClinicOpeningHoursNotification,
    private store: Store<ClinicTableFormType>,
  ) {}

  readClinicOpeningHoursPost() {
    const request: TokenRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<{ openingHours: OpeningHoursDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.openingHourRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormRowsAction<OpeningHoursDomainModel>(ActionTypeEnum.clinicOpeningHours)({
            rows: res.data.openingHours.map(row => ({ id: row.id, isSelected: false, row })),
          }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.clinicOpeningHours)())
        }),
      )
  }

  updateClinicOpeningHoursPost(domain: OpeningHoursDomainModel) {
    const request: ClinicOpeningHoursRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<{ openingHours: OpeningHoursDomainModel }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.openingHourUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(
            baseTableFormUpdateRow<OpeningHoursDomainModel>(
              ActionTypeEnum.clinicOpeningHours,
            )({
              row: { id: res.data.openingHours.id, isSelected: false, row: res.data.openingHours },
            }),
          )
          this.store.dispatch(
            baseTableFormUpdateSelectedRow<OpeningHoursDomainModel>(
              ActionTypeEnum.clinicOpeningHours,
            )({
              row: { id: res.data.openingHours.id, isSelected: false, row: res.data.openingHours },
            }),
          )
          this.vetClinicOpeningHours.runResponseUpdate({
            success: res.success,
            message: res.messages[0],
          })
        }),
      )
  }
}
