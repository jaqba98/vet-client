import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { faArrowsRotate, faMagnifyingGlass, faPlus, faTable, faTrash } from '@fortawesome/free-solid-svg-icons'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableNavDomainModel, TableNavFormModel } from '@vet-client/lib-domain'
import { TableFormTabEnum } from '../enum/table-form-tab.enum'

@Component({
  selector: 'lib-table-nav-form',
  imports: [BaseFormComponent],
  templateUrl: './table-nav-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableNavFormComponent
  extends BaseFormService<TableNavFormModel, TableNavDomainModel>
  implements OnInit, OnDestroy {
  @Output() tableNavTabEvent = new EventEmitter<TableFormTabEnum>()
  @Output() tableNavDeleteEvent = new EventEmitter()
  @Output() tableNavRefreshEvent = new EventEmitter()

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
      this.tableNavTabEvent.emit(TableFormTabEnum.table)
    }
    else if (domain.create) {
      this.tableNavTabEvent.emit(TableFormTabEnum.create)
    }
    else if (domain.delete) {
      this.tableNavDeleteEvent.emit()
    }
    else if (domain.refresh) {
      this.tableNavRefreshEvent.emit()
    }
    else if (domain.search) {
      this.tableNavTabEvent.emit(TableFormTabEnum.search)
    }
  }
}
