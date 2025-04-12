import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Validators } from '@angular/forms'

import { ActionTypeEnum, InvoiceTableFormType } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'
import { InvoiceNotification } from '@vet-client/lib-http'
import { InvoiceFormModel } from '@vet-client/lib-domain'

@Component({
  selector: 'lib-vet-invoice-form',
  imports: [TableFormComponent],
  templateUrl: './vet-invoice-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetInvoiceFormComponent {
  formModel: TableFormModel<InvoiceFormModel>
  name = ActionTypeEnum.invoice
  headers: string[] = []

  constructor(
    private baseForm: BaseFormBuilder,
    public store: Store<InvoiceTableFormType>,
    public medication: InvoiceNotification,
  ) {
    this.formModel = {
      id: this.baseForm
        .buildInput('text', 'Id')
        .build(),
      invoiceDate: this.baseForm
        .buildInput('text', 'Invoice Date')
        .buildValidators([Validators.required])
        .build(),
      dueDate: this.baseForm
        .buildInput('text', 'Due Date')
        .buildValidators([Validators.required])
        .build(),
      totalAmount: this.baseForm
        .buildInput('text', 'Total Amount')
        .buildValidators([Validators.required])
        .build(),
      amountPaid: this.baseForm
        .buildInput('text', 'Amount Paid')
        .buildValidators([Validators.required])
        .build(),
      outstandingAmount: this.baseForm
        .buildInput('text', 'Outstanding Amount')
        .buildValidators([Validators.required])
        .build(),
      paymentStatus: this.baseForm
        .buildInput('text', 'Payment Status')
        .buildValidators([Validators.required, Validators.maxLength(9)])
        .build(),
      paymentMethod: this.baseForm
        .buildInput('text', 'Payment Method')
        .buildValidators([Validators.required, Validators.maxLength(14)])
        .build(),
      notes: this.baseForm
        .buildInput('text', 'Notes')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      appointmentId: this.baseForm
        .buildInput('text', 'Appointment id')
        .buildValidators([Validators.required])
        .build(),
    }
    this.headers = Object.entries(this.formModel)
      .filter(([, value]) => value.isEnabled)
      .map(([key]) => key)
  }
}
