import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Validators } from '@angular/forms'

import { ActionTypeEnum, MedicalRecordTableFormType } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'
import { MedicalRecordNotification } from '@vet-client/lib-http'
import { MedicalRecordFormModel } from '@vet-client/lib-domain'

@Component({
  selector: 'lib-vet-medical-record-form',
  imports: [TableFormComponent],
  templateUrl: './vet-medical-record-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetMedicalRecordFormComponent {
  formModel: TableFormModel<MedicalRecordFormModel>
  name = ActionTypeEnum.medicalRecord
  headers: string[] = []

  constructor(
    private baseForm: BaseFormBuilder,
    public store: Store<MedicalRecordTableFormType>,
    public crud: MedicalRecordNotification,
  ) {
    //
    this.formModel = {
      id: this.baseForm
        .buildInput('text', 'Id')
        .build(),
      isArchived: this.baseForm
        .buildInput('text', 'Is archived')
        .buildValidators([Validators.required])
        .build(),
      diagnosis: this.baseForm
        .buildInput('text', 'Diagnosis')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      treatment: this.baseForm
        .buildInput('text', 'Treatment')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      procedures: this.baseForm
        .buildInput('text', 'Procedures')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      nextAppointment: this.baseForm
        .buildInput('text', 'Next Appointment')
        .buildValidators([Validators.required])
        .build(),
      status: this.baseForm
        .buildInput('text', 'Status')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      notes: this.baseForm
        .buildInput('text', 'Notes')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
    }
    this.headers = Object.entries(this.formModel)
      .filter(([, value]) => value.isEnabled)
      .map(([key]) => key)
  }
}
