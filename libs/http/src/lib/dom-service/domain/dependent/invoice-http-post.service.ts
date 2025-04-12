import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import {
  ActionTypeEnum, baseTableFormMaxPageAction,
  baseTableFormRowsAction,
  InvoiceTableFormType,
} from '@vet-client/lib-store'
import {
  DeleteDomainModel, DeleteRequestModel,
  InvoiceDataModel,
  InvoiceDomainModel,
  InvoiceMetadataModel,
  InvoiceRequestModel,
  ResponseModel,
  TokenRequestModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { InvoiceNotification } from '../../../notification/domain/dependent/invoice.notification'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class InvoiceHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private invoice: InvoiceNotification,
    private store: Store<InvoiceTableFormType>,
  ) {}

  createInvoicePost(domain: InvoiceDomainModel) {
    const request: InvoiceRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<InvoiceDataModel, InvoiceMetadataModel>>({
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
    const request: TokenRequestModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<InvoiceDataModel, InvoiceMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.invoiceRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormRowsAction<InvoiceDomainModel, InvoiceMetadataModel>(ActionTypeEnum.invoice)({
            rows: res.data.invoices.map(row => ({
              id: row.id,
              isSelected: false,
              data: row,
            })),
            metadata: res.metadata,
          }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.invoice)())
        }),
      )
  }

  updateInvoicePost(domain: InvoiceDomainModel) {
    const request: InvoiceRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<InvoiceDataModel, InvoiceMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.invoiceUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          // todo: Refactor it
          // if (res.success) {
          //   this.store.dispatch(
          //     baseTableFormUpdateRow<InvoiceDomainModel>(ActionTypeEnum.invoice)({
          //       row: {
          //         id: res.data.invoices[0].id,
          //         isSelected: false,
          //         row: res.data.invoices[0],
          //       },
          //     }),
          //   )
          //   this.store.dispatch(
          //     baseTableFormUpdateSelectedRow<InvoiceDomainModel>(
          //       ActionTypeEnum.invoice,
          //     )({
          //       row: {
          //         id: res.data.invoices[0].id,
          //         isSelected: false,
          //         row: res.data.invoices[0],
          //       },
          //     }),
          //   )
          // }
          // this.invoice.runResponseUpdate({
          //   success: res.success,
          //   message: res.messages[0],
          // })
        }),
      )
  }

  deleteInvoicePost(domain: DeleteDomainModel) {
    const request: DeleteRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<InvoiceDataModel, InvoiceMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.invoiceDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          // todo: Refactor it
          // this.store.dispatch(
          //   baseTableFormDeleteAction(ActionTypeEnum.invoice)({
          //     ids: domain.ids,
          //   }),
          // )
          // this.store.dispatch(
          //   baseTableFormMaxPageAction(ActionTypeEnum.invoice)(),
          // )
        }),
      )
  }
}
