import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

import { TablePanelControlComponent } from '@vet-client/lib-control'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'
import { TableAddFormComponent } from './table-add-form/table-add-form.component'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableFormModel } from './model/table-form.model'
import { TableDataFormComponent } from './table-data-form/table-data-form.component'
import { BaseTableFormStore } from './store/base-table-form.store'
import { TablePaginatorFormComponent } from './table-paginator-form/table-paginator-form.component'
import { TableEditFormComponent } from './table-edit-form/table-edit-form.component'

@Component({
  selector: 'lib-table-form',
  imports: [
    CommonModule,
    TablePanelControlComponent,
    TableNavFormComponent,
    TableAddFormComponent,
    TableDataFormComponent,
    TablePaginatorFormComponent,
    TableEditFormComponent,
  ],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent<TData> {
  @Input({ required: true }) store!: BaseTableFormStore<TData>

  @Input() tableButtonEnabled = true
  @Input() addButtonEnabled = true
  @Input() removeButtonEnabled = true

  @Input({ required: true }) createFormModel!: TableFormModel
  @Input({ required: true }) updateFormModel!: TableFormModel
}
