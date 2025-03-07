import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableDataModel, TableFormModel } from '../table-form/model/table-form.model'
import { VetServicesFormModel } from './vet-services-form.model'

@Component({
  selector: 'lib-vet-services-form',
  imports: [TableFormComponent],
  templateUrl: './vet-services-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetServicesFormComponent {
  readonly formModel: TableFormModel<keyof VetServicesFormModel>

  constructor(private readonly builder: BaseFormBuilder) {
    this.formModel = {
      id: this.builder.buildInputText('ID', [], false),
      name: this.builder.buildInputText('Name', [], true),
      description: this.builder.buildInputText('Description', [], true),
      category: this.builder.buildInputText('Category', [], true),
      durationMinutes: this.builder.buildInputText('Duration Minutes', [], true),
      price: this.builder.buildInputText('Price', [], true),
      isAvailable: this.builder.buildInputText('Is Available', [], true),
    }
  }

  onTableAddFormEvent(event: TableDataModel) {
    console.log(event)
  }

  // readonly rows!: TableFormRowsModel<keyof VetServicesModel>
  // constructor(private readonly builder: BaseFormBuilder) {
  //   this.rows = Array
  //     .from({ length: 100 }, (_, i) => i + 1)
  //     .map(i => i.toString())
  //     .map(index => <VetServicesModel>{
  //       id: index,
  //       name: `name-${index}`,
  //       description: `description-${index}`,
  //       category: `category-${index}`,
  //       durationMinutes: `durationMinutes-${index}`,
  //       price: `price-${index}`,
  //       isAvailable: `isAvailable-${index}`,
  //     })
  // }
}
