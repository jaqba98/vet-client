import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { TableFormComponent } from '../table-form/table-form.component'
import { VetServicesFormModel, VetServicesModel } from './vet-services-form.model'

@Component({
  selector: 'lib-vet-services-form',
  imports: [TableFormComponent],
  templateUrl: './vet-services-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetServicesFormComponent {
  readonly formModel!: VetServicesFormModel

  constructor(private readonly builder: BaseFormBuilder) {
    this.formModel = {
      id: this.builder.buildInputText('Id', [], true),
      name: this.builder.buildInputText('Name', [], true),
      description: this.builder.buildInputText('Description', [], true),
      category: this.builder.buildInputText('Category', [], true),
      durationMinutes: this.builder.buildInputText('Duration Minutes', [], true),
      price: this.builder.buildInputText('Price', [], true),
      isAvailable: this.builder.buildInputText('Is Available', [], true),
    }
  }

  onTableAddFormEvent(event: VetServicesModel) {
    console.log(event)
  }
}
