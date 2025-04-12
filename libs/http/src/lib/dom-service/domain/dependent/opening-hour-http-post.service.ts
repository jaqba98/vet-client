import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { ClinicTableFormType } from '@vet-client/lib-store'
import {
  OpeningHourDataModel,
  OpeningHourDomainModel,
  OpeningHourMetadataModel,
  OpeningHourRequestModel,
  ResponseModel,
  TokenRequestModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { OpeningHourNotification } from '../../../notification/domain/dependent/opening-hour.notification'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class OpeningHourHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private openingHour: OpeningHourNotification,
    private store: Store<ClinicTableFormType>,
  ) {}

  readOpeningHourPost() {
    const request: TokenRequestModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<OpeningHourDataModel, OpeningHourMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.openingHourRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          // todo: Refactor it
          // this.store.dispatch(baseTableFormRowsAction<OpeningHoursDomainModel>(ActionTypeEnum.openingHour)({
          //   rows: res.data.openingHours.map(row => ({ id: row.id, isSelected: false, row })),
          // }))
          // this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.openingHour)())
        }),
      )
  }

  updateOpeningHourPost(domain: OpeningHourDomainModel) {
    const request: OpeningHourRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<OpeningHourDataModel, OpeningHourMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.openingHourUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          // todo: Refactor it
          // this.store.dispatch(
          //   baseTableFormUpdateRow<OpeningHoursDomainModel>(
          //     ActionTypeEnum.openingHour,
          //   )({
          //     row: { id: res.data.openingHours[0].id, isSelected: false, row: res.data.openingHours[0] },
          //   }),
          // )
          // this.store.dispatch(
          //   baseTableFormUpdateSelectedRow<OpeningHoursDomainModel>(
          //     ActionTypeEnum.openingHour,
          //   )({
          //     row: { id: res.data.openingHours[0].id, isSelected: false, row: res.data.openingHours[0] },
          //   }),
          // )
          // this.openingHour.runResponseUpdate({
          //   success: res.success,
          //   message: res.messages[0],
          // })
        }),
      )
  }
}
