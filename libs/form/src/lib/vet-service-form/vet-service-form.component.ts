import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Validators } from '@angular/forms'

import { ActionTypeEnum, ServiceTableFormType } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ServiceClinicFormModel } from '@vet-client/lib-domain'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { ServiceNotification } from '@vet-client/lib-http'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'

@Component({
  selector: 'lib-vet-service-form',
  imports: [TableFormComponent],
  templateUrl: './vet-service-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetServiceFormComponent {
  formModel: TableFormModel<ServiceClinicFormModel>
  name = ActionTypeEnum.serviceClinic
  headers: string[] = []

  constructor(
    private baseForm: BaseFormBuilder,
    public store: Store<ServiceTableFormType>,
    public crud: ServiceNotification,
  ) {
    this.formModel = {
      id: this.baseForm
        .buildInput('text', 'Id')
        .build(),
      isArchived: this.baseForm
        .buildInput('text', 'Is Archived')
        .build(),
      fullName: this.baseForm
        .buildInput('text', 'Full name')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      description: this.baseForm
        .buildInput('text', 'Description')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      category: this.baseForm
        .buildInput('text', 'Category')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      durationMinutes: this.baseForm
        .buildInput('text', 'Duration Minutes')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      price: this.baseForm
        .buildInput('text', 'Price')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      isAvailable: this.baseForm
        .buildInput('text', 'Is Available')
        .buildValidators([Validators.required, Validators.maxLength(255)])
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
