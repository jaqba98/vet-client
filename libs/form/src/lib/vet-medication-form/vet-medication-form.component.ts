import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Validators } from '@angular/forms'

import { ActionTypeEnum, MedicationTableFormType } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { MedicationFormModel } from '@vet-client/lib-domain'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'
import { MedicationNotification } from '@vet-client/lib-http'

@Component({
  selector: 'lib-vet-medication-form',
  imports: [TableFormComponent],
  templateUrl: './vet-medication-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetMedicationFormComponent {
  formModel: TableFormModel<MedicationFormModel>
  name = ActionTypeEnum.medication
  headers: string[] = []

  constructor(
    private baseForm: BaseFormBuilder,
    public store: Store<MedicationTableFormType>,
    public medication: MedicationNotification,
  ) {
    this.formModel = {
      id: this.baseForm
        .buildInput('text', 'Id')
        .build(),
      isArchived: this.baseForm
        .buildInput('text', 'Is archived')
        .buildValidators([Validators.required])
        .build(),
      name: this.baseForm
        .buildInput('text', 'Name')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      description: this.baseForm
        .buildInput('text', 'Description')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      manufacturer: this.baseForm
        .buildInput('text', 'Manufacturer')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      dose: this.baseForm
        .buildInput('text', 'Dose')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      quantityInStock: this.baseForm
        .buildInput('text', 'Quantity In Stock')
        .buildValidators([Validators.required])
        .build(),
      expirationDate: this.baseForm
        .buildInput('text', 'Expiration Date')
        .buildValidators([Validators.required])
        .build(),
      price: this.baseForm
        .buildInput('text', 'Price')
        .buildValidators([Validators.required])
        .build(),
      isAvailable: this.baseForm
        .buildInput('text', 'Is Available')
        .buildValidators([Validators.required])
        .build(),
      clinicId: this.baseForm
        .buildInput('text', 'Clinic ID')
        .buildValidators([Validators.required])
        .build(),
    }
    this.headers = Object.entries(this.formModel)
      .filter(([, value]) => value.isEnabled)
      .map(([key]) => key)
  }
}
