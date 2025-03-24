import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { Validators } from '@angular/forms'

import { ActionTypeEnum, ClinicTableFormType } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ClinicFormModel } from '@vet-client/lib-domain'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { ClinicNotification } from '@vet-client/lib-http'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'

@Component({
  selector: 'lib-vet-clinic-form',
  imports: [TableFormComponent],
  templateUrl: './vet-clinic-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicFormComponent {
  formModel: TableFormModel<ClinicFormModel>
  name = ActionTypeEnum.clinic

  constructor(
    private baseForm: BaseFormBuilder,
    public store: Store<ClinicTableFormType>,
    public crud: ClinicNotification,
  ) {
    this.formModel = {
      id: this.baseForm
        .buildInput('text', 'Id')
        .buildIsEnabled(false)
        .build(),
      name: this.baseForm
        .buildInput('text', 'Name')
        .buildValidators([Validators.required, Validators.maxLength(150)])
        .build(),
      street: this.baseForm
        .buildInput('text', 'Street')
        .buildValidators([Validators.required, Validators.maxLength(100)])
        .build(),
      buildingNumber: this.baseForm
        .buildInput('text', 'Building Number')
        .buildValidators([Validators.required, Validators.maxLength(10)])
        .build(),
      apartmentNumber: this.baseForm
        .buildInput('text', 'Apartment Number')
        .buildValidators([Validators.required, Validators.maxLength(10)])
        .build(),
      postalCode: this.baseForm
        .buildInput('text', 'Postal Code')
        .buildValidators([Validators.required, Validators.maxLength(10)])
        .build(),
      city: this.baseForm
        .buildInput('text', 'City')
        .buildValidators([Validators.required, Validators.maxLength(80)])
        .build(),
      province: this.baseForm
        .buildInput('text', 'Province')
        .buildValidators([Validators.required, Validators.maxLength(80)])
        .build(),
      country: this.baseForm
        .buildInput('text', 'Country')
        .buildValidators([Validators.required, Validators.maxLength(56)])
        .build(),
      email: this.baseForm
        .buildInput('text', 'Email')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      phoneNumber: this.baseForm
        .buildInput('text', 'Phone number')
        .buildValidators([Validators.required, Validators.maxLength(20)])
        .build(),
    }
  }
}
