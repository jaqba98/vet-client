import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Validators } from '@angular/forms'

import { ActionTypeEnum, ClientTableFormType } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ClientFormModel } from '@vet-client/lib-domain'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { ClientNotification } from '@vet-client/lib-http'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'

@Component({
  selector: 'lib-client-form',
  imports: [TableFormComponent],
  templateUrl: './client-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientFormComponent {
  formModel: TableFormModel<ClientFormModel>
  name = ActionTypeEnum.client
  headers: string[] = []

  constructor(
    private baseForm: BaseFormBuilder,
    public store: Store<ClientTableFormType>,
    public crud: ClientNotification,
  ) {
    this.formModel = {
      id: this.baseForm
        .buildInput('text', 'Id')
        .buildIsEnabled(false)
        .build(),
      isArchived: this.baseForm
        .buildInput('text', 'Is Archived')
        .build(),
      email: this.baseForm
        .buildInput('text', 'Email')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      phoneNumber: this.baseForm
        .buildInput('text', 'Phone number')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      firstName: this.baseForm
        .buildInput('text', 'First Name')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      lastName: this.baseForm
        .buildInput('text', 'Last name')
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
