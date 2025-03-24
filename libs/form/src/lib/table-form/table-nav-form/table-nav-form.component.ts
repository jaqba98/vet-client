import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { faArrowsRotate, faMagnifyingGlass, faPlus, faTable, faTrash } from '@fortawesome/free-solid-svg-icons'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective, CrudNotification } from '@vet-client/lib-utils'
import { DeleteDomainModel, TableNavDomainModel, TableNavFormModel } from '@vet-client/lib-domain'
import { TableFormTabEnum } from '../enum/table-form-tab.enum'
import { Store } from '@ngrx/store'
import { BaseTableFormRowModel, baseTableFormTabAction } from '@vet-client/lib-store'
import { ClinicNotification } from '@vet-client/lib-http'

@Component({
  selector: 'lib-table-nav-form',
  imports: [BaseFormComponent],
  templateUrl: './table-nav-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableNavFormComponent<TDomainModel>
  extends BaseFormService<TableNavFormModel, TableNavDomainModel>
  implements OnInit, OnDestroy {
  @Output() tableNavRefreshEvent = new EventEmitter()

  @Input({ required: true }) rows!: BaseTableFormRowModel<TDomainModel>[]
  @Input({ required: true }) store!: Store
  @Input({ required: true }) crud!: CrudNotification<TDomainModel, DeleteDomainModel>
  @Input({ required: true }) tableButtonEnabled = true
  @Input({ required: true }) createButtonEnabled = true
  @Input({ required: true }) deleteButtonEnabled = true
  @Input({ required: true }) refreshButtonEnabled = true
  @Input({ required: true }) searchButtonEnabled = true

  constructor(private baseForm: BaseFormBuilder) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      table: this.baseForm
        .buildButtonIcon('table', faTable, 'dark-primary')
        .buildIsEnabled(this.tableButtonEnabled)
        .build(),
      create: this.baseForm
        .buildButtonIcon('create', faPlus, 'success')
        .buildIsEnabled(this.createButtonEnabled)
        .build(),
      delete: this.baseForm
        .buildButtonIcon('delete', faTrash, 'error')
        .buildIsEnabled(this.deleteButtonEnabled)
        .build(),
      refresh: this.baseForm
        .buildButtonIcon('refresh', faArrowsRotate, 'primary')
        .buildIsEnabled(this.refreshButtonEnabled)
        .build(),
      search: this.baseForm
        .buildButtonIcon('search', faMagnifyingGlass, 'dark-secondary')
        .buildIsEnabled(this.searchButtonEnabled)
        .build(),
    })
  }

  ngOnDestroy() {
    this.onDestroy()
  }

  override onSubmit(domain: TableNavDomainModel) {
    if (domain.table) {
      this.store.dispatch(baseTableFormTabAction()({ tab: TableFormTabEnum.table }))
    }
    else if (domain.create) {
      this.store.dispatch(baseTableFormTabAction()({ tab: TableFormTabEnum.create }))
    }
    else if (domain.delete) {
      const ids = this.rows
        .filter(row => row.isSelected)
        .map(row => row.id)
      this.crud.runNotificationDelete({ ids })
    }
    else if (domain.refresh) {
      this.tableNavRefreshEvent.emit()
    }
    else if (domain.search) {
      this.store.dispatch(baseTableFormTabAction()({ tab: TableFormTabEnum.search }))
    }
  }
}
