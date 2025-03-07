import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TableControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseFormModel } from '@vet-client/lib-base-form'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'
import { TableAddFormComponent } from './table-add-form/table-add-form.component'
import { TableTabEnum } from './enum/table-tab.enum'
import { TableNavModel } from './table-nav-form/table-nav-form.model'
import { TableTableFormComponent } from './table-table-form/table-table-form.component'
import { TableFormRowsModel } from './model/table-form.model'

@Component({
  selector: 'lib-table-form',
  imports: [
    CommonModule,
    TableControlComponent,
    TableNavFormComponent,
    TableAddFormComponent,
    TableTableFormComponent,
  ],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent<
  TKey extends string,
  TFormModel extends BaseFormModel<TKey>,
  TModel,
> {
  @Output() tableAddFormEvent = new EventEmitter<TModel>()

  @Input() tableButton = true
  @Input() addButton = true
  @Input() removeButton = true
  @Input() refreshButton = true
  @Input() searchButton = true

  @Input({ required: true }) formModel!: TFormModel
  @Input({ required: true }) rows!: TableFormRowsModel

  tableTab: TableTabEnum = TableTabEnum.table

  onTableNavFormEvent(event: TableNavModel) {
    if (event.table) this.tableTab = TableTabEnum.table
    else if (event.add) this.tableTab = TableTabEnum.add
  }

  onTableAddFormEvent(event: TModel) {
    this.tableAddFormEvent.emit(event)
  }
}
