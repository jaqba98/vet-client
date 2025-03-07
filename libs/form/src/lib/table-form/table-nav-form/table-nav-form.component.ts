import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { faArrowsRotate, faMagnifyingGlass, faPlus, faTable, faTrash } from '@fortawesome/free-solid-svg-icons'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableNavFormModel, TableNavModel } from './table-nav-form.model'

@Component({
  selector: 'lib-table-nav-form',
  imports: [BaseFormComponent],
  templateUrl: './table-nav-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableNavFormComponent
  extends BaseFormService<TableNavFormModel, TableNavModel>
  implements OnInit {
  @Output() event = new EventEmitter<TableNavModel>()

  @Input({ required: true }) tableNavFormTableButton!: boolean

  @Input({ required: true }) tableNavFormAddButton!: boolean

  @Input({ required: true }) tableNavFormRemoveButton!: boolean

  @Input({ required: true }) tableNavFormRefreshButton!: boolean

  @Input({ required: true }) tableNavFormSearchButton!: boolean

  constructor(private readonly builder: BaseFormBuilder) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      table: this.builder.buildButtonIcon('table', faTable, 'dark-primary', this.tableNavFormTableButton),
      add: this.builder.buildButtonIcon('add', faPlus, 'success', this.tableNavFormAddButton),
      remove: this.builder.buildButtonIcon('remove', faTrash, 'error', this.tableNavFormRemoveButton),
      refresh: this.builder.buildButtonIcon('refresh', faArrowsRotate, 'primary', this.tableNavFormRefreshButton),
      search: this.builder.buildButtonIcon('search', faMagnifyingGlass, 'dark-secondary', this.tableNavFormSearchButton),
    })
  }

  override onSubmit(model: TableNavModel) {
    this.event.emit(model)
  }
}
