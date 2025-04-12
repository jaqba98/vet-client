import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { EmploymentTableFormType } from '@vet-client/lib-store'
import {
  DeleteDomainModel,
  DeleteRequestModel,
  EmploymentDataModel,
  EmploymentDomainModel,
  EmploymentMetadataModel,
  EmploymentRequestModel,
  ResponseModel,
  TokenRequestModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { EmploymentNotification } from '../../../notification/domain/dependent/employment.notification'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class EmploymentHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private employment: EmploymentNotification,
    private store: Store<EmploymentTableFormType>,
  ) {}

  createEmploymentPost(domain: EmploymentDomainModel) {
    const request: EmploymentRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<EmploymentDataModel, EmploymentMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.employmentCreate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.employment.runResponseCreate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  readEmploymentPost() {
    const request: TokenRequestModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<EmploymentDataModel, EmploymentMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.employmentRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          // todo: Refactor it
          // this.store.dispatch(baseTableFormRowsAction<EmploymentDomainModel>(ActionTypeEnum.employment)({
          //   rows: res.data.employments.map(row => ({ id: row.id, isSelected: false, row })),
          // }))
          // this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.employment)())
        }),
      )
  }

  updateEmploymentPost(domain: EmploymentDomainModel) {
    const request: EmploymentRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<EmploymentDataModel, EmploymentMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.employmentUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          // todo: Refactor it
          // this.store.dispatch(baseTableFormUpdateRow<EmploymentDomainModel>(ActionTypeEnum.employment)({
          //   row: { id: res.data.id, isSelected: false, row: res.data },
          // }))
          // this.store.dispatch(baseTableFormUpdateSelectedRow<EmploymentDomainModel>(ActionTypeEnum.employment)({
          //   row: { id: res.data.id, isSelected: false, row: res.data },
          // }))
          // this.employment.runResponseUpdate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  deleteEmploymentPost(domain: DeleteDomainModel) {
    const request: DeleteRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<EmploymentDataModel, EmploymentMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.employmentDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          // todo: Refactor it
          // this.store.dispatch(baseTableFormDeleteAction(ActionTypeEnum.employment)({ ids: domain.ids }))
          // this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.employment)())
        }),
      )
  }
}
