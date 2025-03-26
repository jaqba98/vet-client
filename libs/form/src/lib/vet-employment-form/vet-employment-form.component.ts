import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Validators } from '@angular/forms'

import { ActionTypeEnum, EmploymentTableFormType } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { EmploymentFormModel } from '@vet-client/lib-domain'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'
import { EmploymentNotification } from '@vet-client/lib-http'

@Component({
  selector: 'lib-vet-employment-form',
  imports: [TableFormComponent],
  templateUrl: './vet-employment-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetEmploymentFormComponent {
  formModel: TableFormModel<EmploymentFormModel>
  name = ActionTypeEnum.employment

  constructor(
    private baseForm: BaseFormBuilder,
    public store: Store<EmploymentTableFormType>,
    public crud: EmploymentNotification,
  ) {
    this.formModel = {
      id: this.baseForm
        .buildInput('text', 'Id')
        .buildIsEnabled(false)
        .build(),
      isOwner: this.baseForm
        .buildInput('text', 'Is Owner')
        .buildValidators([Validators.required])
        .build(),
      isArchived: this.baseForm
        .buildSelect('Is Archived', false, [{ label: 'Not archived', value: false }, { label: 'Archived', value: true }])
        .buildValidators([Validators.required])
        .build(),
      accountId: this.baseForm
        .buildInput('text', 'Account Id')
        .buildValidators([Validators.required])
        .build(),
      clinicId: this.baseForm
        .buildInput('text', 'Clinic Id')
        .buildValidators([Validators.required])
        .build(),
    }
  }
}
