import { Component } from '@angular/core'
import { Validators } from '@angular/forms'

import { ClinicDomainFormDataModel } from '@vet-client/lib-domain'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'
import { VetClinicFormStore } from './vet-clinic-form.store'

@Component({
  selector: 'lib-vet-clinic-form',
  imports: [TableFormComponent],
  templateUrl: './vet-clinic-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicFormComponent {
  constructor(public store: VetClinicFormStore) {
    this.store.read()
  }

  readonly formModel: TableFormModel<keyof ClinicDomainFormDataModel> = {
    id: BaseFormBuilder.buildInputText('ID', [], false),
    name: BaseFormBuilder.buildInputText('Name', [Validators.required, Validators.maxLength(255)], true),
  }
}
