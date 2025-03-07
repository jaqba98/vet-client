import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

import { TablePanelControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'
import { TableNavDataModel } from './table-nav-form/table-nav-form.model'
import { TableTabEnum } from './enum/table-tab.enum'

@Component({
  selector: 'lib-table-form',
  imports: [CommonModule, TablePanelControlComponent, TableNavFormComponent],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent {
  @Input() tableButtonEnabled = true
  @Input() addButtonEnabled = true
  @Input() removeButtonEnabled = true
  @Input() refreshButtonEnabled = true
  @Input() searchButtonEnabled = true

  tableTab: TableTabEnum = TableTabEnum.table

  onTableNavFormEvent(event: TableNavDataModel) {
    if (event.table) this.tableTab = TableTabEnum.table
    else if (event.add) this.tableTab = TableTabEnum.add
  }

  // @Output() tableAddFormEvent = new EventEmitter<TModel>()
  //
  // @Input({ required: true }) formModel!: TFormModel
  // @Input({ required: true }) rows!: TableFormRowsModel
  //
  // onTableAddFormEvent(event: TModel) {
  //   this.tableAddFormEvent.emit(event)
  // }
}
