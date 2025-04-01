import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Validators } from '@angular/forms'

import { ActionTypeEnum, AppointmentTableFormType } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { AppointmentFormModel } from '@vet-client/lib-domain'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'
import { AppointmentNotification } from '@vet-client/lib-http'

@Component({
  selector: 'lib-vet-appointment-form',
  imports: [TableFormComponent],
  templateUrl: './vet-appointment-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetAppointmentFormComponent {
  formModel: TableFormModel<AppointmentFormModel>
  name = ActionTypeEnum.appointment
  headers: string[] = []

  constructor(
    private baseForm: BaseFormBuilder,
    public store: Store<AppointmentTableFormType>,
    public medication: AppointmentNotification,
  ) {
    this.formModel = {
      id: this.baseForm
        .buildInput('text', 'Id')
        .build(),
      isArchived: this.baseForm
        .buildInput('text', 'Is archived')
        .buildValidators([Validators.required])
        .build(),
      dateAndHour: this.baseForm
        .buildInput('text', 'dateAndHour')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      type: this.baseForm
        .buildInput('text', 'type')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      status: this.baseForm
        .buildInput('text', 'status')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      reason: this.baseForm
        .buildInput('text', 'reason')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      notes: this.baseForm
        .buildInput('text', 'notes')
        .buildValidators([Validators.required])
        .build(),
      clinicId: this.baseForm
        .buildInput('text', 'clinicId')
        .buildValidators([Validators.required])
        .build(),
      vetId: this.baseForm
        .buildInput('text', 'vetId')
        .buildValidators([Validators.required])
        .build(),
      petId: this.baseForm
        .buildInput('text', 'petId')
        .buildValidators([Validators.required])
        .build(),
      invoiceId: this.baseForm
        .buildInput('text', 'invoiceId')
        .buildValidators([Validators.required])
        .build(),
      medicalRecordId: this.baseForm
        .buildInput('text', 'medicalRecordId')
        .buildValidators([Validators.required])
        .build(),
    }
    this.headers = Object.entries(this.formModel)
      .filter(([, value]) => value.isEnabled)
      .map(([key]) => key)
  }
}
