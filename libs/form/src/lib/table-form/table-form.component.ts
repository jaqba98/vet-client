import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs'

import { TablePanelControlComponent } from '@vet-client/lib-control'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'
import { TableAddFormComponent } from './table-add-form/table-add-form.component'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableFormModel } from './model/table-form.model'
import { TableDataFormComponent } from './table-data-form/table-data-form.component'
import { BaseTableFormStore } from './store/base-table-form.store'
import { TablePaginatorFormComponent } from './table-paginator-form/table-paginator-form.component'
import { TableEditFormComponent } from './table-edit-form/table-edit-form.component'
import { TableFormRowsModel } from './model/table-form-rows.model'

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
export class TableFormComponent<TStore> {
  @Input({ required: true }) dispatchIsSelected!: (id: number, isSelected: boolean) => void
  @Input({ required: true }) selectPage!: () => Observable<{ page: number, maxPage: number }>
  @Input({ required: true }) selectRows!: () => Observable<TableFormRowsModel<TStore>>
  @Input({ required: true }) dispatchPage!: (page: number) => void
  @Input({ required: true }) store!: BaseTableFormStore<TStore>

  @Input() tableButtonEnabled = true
  @Input() addButtonEnabled = true
  @Input() removeButtonEnabled = true

  @Input({ required: true }) formModel!: TableFormModel
}
