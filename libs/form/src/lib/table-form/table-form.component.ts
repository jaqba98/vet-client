import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs'

import { TablePanelControlComponent } from '@vet-client/lib-control'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'
import { TableAddFormComponent } from './table-add-form/table-add-form.component'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableAddFormModel } from './table-add-form/table-add-form.model'
import {
  TableFormHeadersModel,
  TableFormModel,
  TableFormRowsModel,
} from './model/table-form.model'
import { TableTabEnum } from './enum/table-tab.enum'
import { TableNavDataModel } from './table-nav-form/table-nav-form.model'
import { TableDataFormComponent } from './table-data-form/table-data-form.component'
import { BaseResponseModel } from '@vet-client/lib-http'
import { TableFormDeleteAllService } from './service/table-form-delete-all.service'

@Component({
  selector: 'lib-table-form',
  imports: [
    CommonModule,
    TablePanelControlComponent,
    TableNavFormComponent,
    TableAddFormComponent,
    TableDataFormComponent,
  ],
  templateUrl: './table-form.component.html',
  providers: [TableFormDeleteAllService],
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent<TData extends object> {
  @Input({ required: true })
  tableAddFormCallback!: (data: TData, self: TableAddFormComponent<TData>) => Observable<TableAddFormModel>

  @Input({ required: true })
  tableDataFormCallback!: (self: TableDataFormComponent) => Observable<TableFormRowsModel<TData>>

  @Input({ required: true })
  tableDataRemoveCallback!: (ids: number[], self: TableDataFormComponent) => Observable<BaseResponseModel>

  constructor(private readonly tableFormDeleteAll: TableFormDeleteAllService) {
  }

  // I am here
  @Input() tableButtonEnabled = true
  @Input() addButtonEnabled = true
  @Input() removeButtonEnabled = true
  @Input() refreshButtonEnabled = true
  @Input() searchButtonEnabled = true

  @Input({ required: true }) formModel!: TableFormModel
  @Input() headers!: TableFormHeadersModel

  tableTab: TableTabEnum = TableTabEnum.data

  onTableNavFormEvent(event: TableNavDataModel) {
    if (event.table) this.tableTab = TableTabEnum.data
    else if (event.add) this.tableTab = TableTabEnum.add
    else if (event.delete) {
      this.tableFormDeleteAll.invoke()
    }
  }
}
