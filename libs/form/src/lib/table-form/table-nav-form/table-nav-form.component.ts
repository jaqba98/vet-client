import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { faArrowsRotate, faMagnifyingGlass, faPlus, faTable, faTrash } from '@fortawesome/free-solid-svg-icons'

import {
  BaseFormBuilder,
  BaseFormComponent,
  BaseFormService,
} from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableNavDataModel, TableNavFormModel } from './table-nav-form.model'

@Component({
  selector: 'lib-table-nav-form',
  imports: [BaseFormComponent],
  templateUrl: './table-nav-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableNavFormComponent extends BaseFormService<TableNavFormModel, TableNavDataModel> implements OnInit {
  @Output() event = new EventEmitter<TableNavDataModel>()

  @Input({ required: true }) tableButtonEnabled!: boolean
  @Input({ required: true }) addButtonEnabled!: boolean
  @Input({ required: true }) removeButtonEnabled!: boolean
  @Input({ required: true }) refreshButtonEnabled!: boolean
  @Input({ required: true }) searchButtonEnabled!: boolean

  ngOnInit() {
    this.initBaseForm({
      table: BaseFormBuilder.buildButtonIcon('table', faTable, 'dark-primary', this.tableButtonEnabled),
      add: BaseFormBuilder.buildButtonIcon('add', faPlus, 'success', this.addButtonEnabled),
      delete: BaseFormBuilder.buildButtonIcon('delete', faTrash, 'error', this.removeButtonEnabled),
      refresh: BaseFormBuilder.buildButtonIcon('refresh', faArrowsRotate, 'primary', this.refreshButtonEnabled),
      search: BaseFormBuilder.buildButtonIcon('search', faMagnifyingGlass, 'dark-secondary', this.searchButtonEnabled),
    })
  }

  override onSubmit(event: TableNavDataModel) {
    this.event.emit(event)
  }
}
