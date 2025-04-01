import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Validators } from '@angular/forms'

import { ActionTypeEnum, PetTableFormType } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { PetFormModel } from '@vet-client/lib-domain'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'
import { PetNotification } from '@vet-client/lib-http'

@Component({
  selector: 'lib-vet-pets-form',
  imports: [TableFormComponent],
  templateUrl: './vet-pets-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetPetsFormComponent {
  formModel: TableFormModel<PetFormModel>
  name = ActionTypeEnum.pet
  headers: string[] = []

  constructor(
    private baseForm: BaseFormBuilder,
    public store: Store<PetTableFormType>,
    public medication: PetNotification,
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
      species: this.baseForm
        .buildInput('text', 'Species')
        .buildValidators([Validators.maxLength(255)])
        .build(),
      breed: this.baseForm
        .buildInput('text', 'Breed')
        .buildValidators([Validators.maxLength(255)])
        .build(),
      dateOfBirth: this.baseForm
        .buildInput('text', 'Date Of Birth')
        .build(),
      weightKg: this.baseForm
        .buildInput('text', 'Weight Kg')
        .build(),
      color: this.baseForm
        .buildInput('text', 'Color')
        .buildValidators([Validators.maxLength(255)])
        .build(),
      sterilized: this.baseForm
        .buildInput('text', 'Sterilized')
        .build(),
      pictureUrl: this.baseForm
        .buildInput('text', 'Picture Url')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      microchipNumber: this.baseForm
        .buildInput('text', 'Microchip Number')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      medicalNotes: this.baseForm
        .buildInput('text', 'Medical Notes')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      clientId: this.baseForm
        .buildInput('text', 'Client Id')
        .buildValidators([Validators.required])
        .build(),
    }
    this.headers = Object.entries(this.formModel)
      .filter(([, value]) => value.isEnabled)
      .map(([key]) => key)
  }
}
