import { Component, EventEmitter, Input, Output } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableControlComponent } from '@vet-client/lib-control'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'
import { TableAddFormComponent } from './table-add-form/table-add-form.component'
import { TableFormModel, TableModel } from './model/table-form.model'
import { TableNavModel } from './table-nav-form/table-nav-form.model'
import { TableTabEnum } from './enum/table-tab.enum'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'lib-table-form',
  imports: [
    CommonModule,
    TableControlComponent,
    TableNavFormComponent,
    TableAddFormComponent,
  ],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent {
  @Output() tableAddFormEvent = new EventEmitter<TableModel>()

  @Input() tableNavFormTableButton = true

  @Input() tableNavFormAddButton = true

  @Input() tableNavFormRemoveButton = true

  @Input() tableNavFormRefreshButton = true

  @Input() tableNavFormSearchButton = true

  @Input({ required: true }) tableFormModel!: TableFormModel

  tableTab: TableTabEnum = TableTabEnum.table

  onTableNavFormEvent(event: TableNavModel) {
    if (event.table) this.tableTab = TableTabEnum.table
    else if (event.add) this.tableTab = TableTabEnum.add
  }

  onTableAddFormEvent(event: TableModel) {
    this.tableAddFormEvent.emit(event)
  }
}
