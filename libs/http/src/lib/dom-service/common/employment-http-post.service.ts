import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { DeleteDomainModel, EmploymentDomainModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import {
  baseTableFormRowsAction,
  baseTableFormDeleteAction,
  baseTableFormUpdateRow,
  baseTableFormUpdateSelectedRow,
  baseTableFormMaxPageAction, ActionTypeEnum, EmploymentTableFormType,
} from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { ResponseModel } from '../../model/response/response.model'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { MethodEnum } from '../../enum/method.enum'
import { DeleteRequestDtoModel } from '../../model/request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../model/base/token-request-dto.model'
import { EmploymentRequestDtoModel } from '../../model/request/controller/employment-request-dto.model'
import { EmploymentNotification } from '../../notification/employment.notification'

@Injectable({ providedIn: 'root' })
export class EmploymentHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private employment: EmploymentNotification,
    private store: Store<EmploymentTableFormType>,
  ) {}

  createEmploymentPost(domain: EmploymentDomainModel) {
    const request: EmploymentRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
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
    const request: TokenRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<{ employments: EmploymentDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.employmentRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormRowsAction<EmploymentDomainModel>(ActionTypeEnum.employment)({
            rows: res.data.employments.map(row => ({ id: row.id, isSelected: false, row })),
          }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.employment)())
        }),
      )
  }

  updateEmploymentPost(domain: EmploymentDomainModel) {
    const request: EmploymentRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<EmploymentDomainModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.employmentUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormUpdateRow<EmploymentDomainModel>(ActionTypeEnum.employment)({
            row: { id: res.data.id, isSelected: false, row: res.data },
          }))
          this.store.dispatch(baseTableFormUpdateSelectedRow<EmploymentDomainModel>(ActionTypeEnum.employment)({
            row: { id: res.data.id, isSelected: false, row: res.data },
          }))
          this.employment.runResponseUpdate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  deleteEmploymentPost(domain: DeleteDomainModel) {
    const request: DeleteRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.employmentDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          this.store.dispatch(baseTableFormDeleteAction(ActionTypeEnum.employment)({ ids: domain.ids }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.employment)())
        }),
      )
  }
}
