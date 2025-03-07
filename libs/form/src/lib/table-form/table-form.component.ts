import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

import { TablePanelControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'
import { TableNavDataModel } from './table-nav-form/table-nav-form.model'
import { TableTabEnum } from './enum/table-tab.enum'
import { TableDataModel, TableFormModel, TableFormRowsModel } from './model/table-form.model'
import { TableAddFormComponent } from './table-add-form/table-add-form.component'
import { TableTableFormComponent } from './table-table-form/table-table-form.component'

@Component({
  selector: 'lib-table-form',
  imports: [
    CommonModule,
    TablePanelControlComponent,
    TableNavFormComponent,
    TableAddFormComponent,
    TableTableFormComponent,
  ],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent {
  @Output() tableAddFormEvent = new EventEmitter<TableDataModel>()

  @Input() tableButtonEnabled = true
  @Input() addButtonEnabled = true
  @Input() removeButtonEnabled = true
  @Input() refreshButtonEnabled = true
  @Input() searchButtonEnabled = true

  @Input({ required: true }) formModel!: TableFormModel
  @Input({ required: true }) rows!: TableFormRowsModel

  tableTab: TableTabEnum = TableTabEnum.table

  onTableNavFormEvent(event: TableNavDataModel) {
    if (event.table) this.tableTab = TableTabEnum.table
    else if (event.add) this.tableTab = TableTabEnum.add
  }

  onTableAddFormEvent(event: TableDataModel) {
    this.tableAddFormEvent.emit(event)
  }
}
