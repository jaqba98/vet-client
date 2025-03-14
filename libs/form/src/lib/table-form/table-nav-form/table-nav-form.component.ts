// done
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { faArrowsRotate, faMagnifyingGlass, faPlus, faTable, faTrash } from '@fortawesome/free-solid-svg-icons'

import {
  BaseFormBuilder,
  BaseFormComponent,
  BaseFormService,
} from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableNavDataModel, TableNavFormModel } from './table-nav-form.model'
import { TableFormTabEnum } from '../enum/table-form-tab.enum'

@Component({
  selector: 'lib-table-nav-form',
  imports: [BaseFormComponent],
  templateUrl: './table-nav-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableNavFormComponent extends BaseFormService<TableNavFormModel, TableNavDataModel> implements OnInit {
  @Output() tableNavEvent = new EventEmitter<TableFormTabEnum>()
  @Output() deleteEvent = new EventEmitter<boolean>()
  @Output() refreshEvent = new EventEmitter<boolean>()

  @Input({ required: true }) tableButtonEnabled!: boolean
  @Input({ required: true }) createButtonEnabled!: boolean
  @Input({ required: true }) deleteButtonEnabled!: boolean
  @Input({ required: true }) refreshButtonEnabled!: boolean
  @Input({ required: true }) searchButtonEnabled!: boolean

  ngOnInit() {
    this.initBaseForm({
      table: BaseFormBuilder.buildButtonIcon('table', faTable, 'dark-primary', this.tableButtonEnabled),
      create: BaseFormBuilder.buildButtonIcon('create', faPlus, 'success', this.createButtonEnabled),
      delete: BaseFormBuilder.buildButtonIcon('delete', faTrash, 'error', this.deleteButtonEnabled),
      refresh: BaseFormBuilder.buildButtonIcon('refresh', faArrowsRotate, 'primary', this.refreshButtonEnabled),
      search: BaseFormBuilder.buildButtonIcon('search', faMagnifyingGlass, 'dark-secondary', this.searchButtonEnabled),
    })
  }

  override onSubmit(event: TableNavDataModel) {
    if (event.table) {
      this.tableNavEvent.emit(TableFormTabEnum.table)
      return
    }
    if (event.create) {
      this.tableNavEvent.emit(TableFormTabEnum.create)
      return
    }
    if (event.delete) {
      this.deleteEvent.emit(true)
      return
    }
    if (event.refresh) {
      this.refreshEvent.emit(true)
      return
    }
    if (event.search) {
      this.tableNavEvent.emit(TableFormTabEnum.search)
      return
    }
  }
}
