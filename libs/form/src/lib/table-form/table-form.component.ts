import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { TablePanelControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'
import { TableNavDataModel } from './table-nav-form/table-nav-form.model'
import { TableTabEnum } from './enum/table-tab.enum'
import { TableDataModel, TableFormHeadersModel, TableFormModel, TableFormRowsModel } from './model/table-form.model'
import { TableAddFormComponent } from './table-add-form/table-add-form.component'
import { TableTableFormComponent } from './table-table-form/table-table-form.component'
import { TableFormService } from './service/table-form.service'

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
  providers: [TableFormService],
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent implements OnInit {
  @Output() tableAddFormEvent = new EventEmitter<TableDataModel>()

  @Input() tableButtonEnabled = true
  @Input() addButtonEnabled = true
  @Input() removeButtonEnabled = true
  @Input() refreshButtonEnabled = true
  @Input() searchButtonEnabled = true

  @Input({ required: true }) formModel!: TableFormModel
  @Input({ required: true }) headers!: TableFormHeadersModel
  @Input({ required: true }) rows!: TableFormRowsModel

  tableTab: TableTabEnum = TableTabEnum.table

  constructor(protected readonly tableForm: TableFormService) {
  }

  ngOnInit() {
    this.tableForm.setRows(this.rows)
  }

  onTableNavFormEvent(event: TableNavDataModel) {
    if (event.table) this.tableTab = TableTabEnum.table
    else if (event.add) this.tableTab = TableTabEnum.add
  }

  onTableAddFormEvent(event: TableDataModel) {
    this.tableAddFormEvent.emit(event)
  }

  onUnselectButtonEvent(id: string) {
    this.tableForm.setIsSelected(id, false)
  }

  onSelectButtonEvent(id: string) {
    this.tableForm.setIsSelected(id, true)
  }

  onEditButtonEvent(id: string) {
    console.log(id)
  }

  onRemoveButtonEvent(id: string) {
    this.tableForm.remove(id)
  }
}
