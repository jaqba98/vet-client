import { Component, Input } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableControlComponent } from '@vet-client/lib-control'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'
import { TableAddFormComponent } from './table-add-form/table-add-form.component'
import { TableFormModel, TableModel } from './model/table-form.model'
import { TableNavModel } from './table-nav-form/table-nav-form.model'

@Component({
  selector: 'lib-table-form',
  imports: [
    TableControlComponent,
    TableNavFormComponent,
    TableAddFormComponent,
  ],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent {
  @Input() tableNavFormTableButton = true

  @Input() tableNavFormAddButton = true

  @Input() tableNavFormRemoveButton = true

  @Input() tableNavFormRefreshButton = true

  @Input() tableNavFormSearchButton = true

  @Input({ required: true }) tableFormModel!: TableFormModel

  onTableNavFormEvent(event: TableNavModel) {
    console.log(event)
  }

  onTableAddFormEvent(event: TableModel) {
    console.log(event)
  }
}
