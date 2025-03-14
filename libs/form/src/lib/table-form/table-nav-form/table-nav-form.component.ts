import { Component, Input, OnInit } from '@angular/core'
import { faPlus, faTable, faTrash } from '@fortawesome/free-solid-svg-icons'

import {
  BaseFormBuilder,
  BaseFormComponent,
  BaseFormService,
} from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableNavDataModel, TableNavFormModel } from './table-nav-form.model'
import { TableTabEnum } from '../enum/table-tab.enum'

@Component({
  selector: 'lib-table-nav-form',
  imports: [BaseFormComponent],
  templateUrl: './table-nav-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableNavFormComponent extends BaseFormService<TableNavFormModel, TableNavDataModel> implements OnInit {
  @Input({ required: true }) dispatchTab!: (tab: string) => void
  @Input({ required: true }) tableButtonEnabled!: boolean
  @Input({ required: true }) addButtonEnabled!: boolean
  @Input({ required: true }) removeButtonEnabled!: boolean

  ngOnInit() {
    this.initBaseForm({
      table: BaseFormBuilder.buildButtonIcon('table', faTable, 'dark-primary', this.tableButtonEnabled),
      create: BaseFormBuilder.buildButtonIcon('add', faPlus, 'success', this.addButtonEnabled),
      delete: BaseFormBuilder.buildButtonIcon('delete', faTrash, 'error', this.removeButtonEnabled),
    })
  }

  override onSubmit(event: TableNavDataModel) {
    if (event.table) {
      this.dispatchTab(TableTabEnum.data)
    }
    else if (event.create) {
      this.dispatchTab(TableTabEnum.create)
    }
    else if (event.delete) {
      // this.store.deleteAll()
    }
  }
}
