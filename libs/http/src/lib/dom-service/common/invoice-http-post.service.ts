import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { AppointmentDomainModel, DeleteDomainModel, InvoiceDomainModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import {
  baseTableFormRowsAction,
  baseTableFormDeleteAction,
  baseTableFormUpdateRow,
  baseTableFormUpdateSelectedRow,
  baseTableFormMaxPageAction, ActionTypeEnum, InvoiceTableFormType,
} from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { ResponseModel } from '../../model/response/response.model'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { MethodEnum } from '../../enum/method.enum'
import { DeleteRequestDtoModel } from '../../model/request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../model/base/token-request-dto.model'
import { AppointmentRequestDtoModel } from '../../model/request/controller/appointment-request-dto.model'
import { InvoiceNotification } from '../../notification/invoice.notification'
import { InvoiceRequestDtoModel } from '../../model/request/controller/invoice-request-dto.model'

@Injectable({ providedIn: 'root' })
export class InvoiceHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private invoice: InvoiceNotification,
    private store: Store<InvoiceTableFormType>,
  ) {}

  createInvoicePost(domain: InvoiceDomainModel) {
    const request: InvoiceRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.invoiceCreate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.invoice.runResponseCreate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  readInvoicePost() {
    const request: TokenRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<{ invoices: InvoiceDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.invoiceRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormRowsAction<InvoiceDomainModel>(ActionTypeEnum.invoice)({
            rows: res.data.invoices.map(row => ({ id: row.id, isSelected: false, row })),
          }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.invoice)())
        }),
      )
  }

  updateInvoicePost(domain: InvoiceDomainModel) {
    const request: InvoiceRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<{ invoice: InvoiceDomainModel }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.invoiceUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormUpdateRow<InvoiceDomainModel>(ActionTypeEnum.invoice)({
            row: { id: res.data.invoice.id, isSelected: false, row: res.data.invoice },
          }))
          this.store.dispatch(baseTableFormUpdateSelectedRow<InvoiceDomainModel>(ActionTypeEnum.invoice)({
            row: { id: res.data.invoice.id, isSelected: false, row: res.data.invoice },
          }))
          this.invoice.runResponseUpdate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  deleteInvoicePost(domain: DeleteDomainModel) {
    const request: DeleteRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.invoiceDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          this.store.dispatch(baseTableFormDeleteAction(ActionTypeEnum.invoice)({ ids: domain.ids }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.invoice)())
        }),
      )
  }
}
