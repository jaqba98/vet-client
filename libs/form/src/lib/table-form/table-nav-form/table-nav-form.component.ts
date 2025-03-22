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
  @Output() deleteSelectedEvent = new EventEmitter<boolean>()
  @Output() refreshEvent = new EventEmitter<boolean>()

  @Input({ required: true }) tableButtonEnabled!: boolean
  @Input({ required: true }) createButtonEnabled!: boolean
  @Input({ required: true }) deleteButtonEnabled!: boolean
  @Input({ required: true }) refreshButtonEnabled!: boolean
  @Input({ required: true }) searchButtonEnabled!: boolean

  constructor(private baseForm: BaseFormBuilder) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      table: this.baseForm.buildButtonIcon('table', faTable, 'dark-primary').build(),
      create: this.baseForm.buildButtonIcon('create', faPlus, 'success').build(),
      delete: this.baseForm.buildButtonIcon('delete', faTrash, 'error').build(),
      refresh: this.baseForm.buildButtonIcon('refresh', faArrowsRotate, 'primary').build(),
      search: this.baseForm.buildButtonIcon('search', faMagnifyingGlass, 'dark-secondary').build(),
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
      this.deleteSelectedEvent.emit(true)
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
