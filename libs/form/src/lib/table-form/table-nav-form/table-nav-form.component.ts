import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import {
  faArrowsRotate,
  faPlus,
  faTable,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

import {
  BaseFormBuilder,
  BaseFormComponent,
  BaseFormService,
} from '@vet-client/lib-base-form'
import { DeleteDomainModel, TableNavDomainModel, TableNavMenuFormModel } from '@vet-client/lib-domain'
import {
  BaseComponentDirective,
  CrudNotification,
} from '@vet-client/lib-utils'
import {
  ActionTypeEnum,
  BaseTableFormRowModel,
  BaseTableFormStoreModel,
  baseTableFormTabAction,
} from '@vet-client/lib-store'
import { TableFormStoreModel } from '../model/table-form-store.model'
import { TableFormTabEnum } from '../enum/table-form-tab.enum'
import { TextControlComponent } from '@vet-client/lib-control'

@Component({
  selector: 'lib-table-nav-form',
  imports: [BaseFormComponent, TextControlComponent],
  templateUrl: './table-nav-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableNavFormComponent<TDomainModel>
  extends BaseFormService<TableNavMenuFormModel, TableNavDomainModel>
  implements OnInit, OnDestroy {
  @Input({ required: true }) store!: Store<TableFormStoreModel>
  @Input({ required: true }) select!: string
  @Input({ required: true }) crud!: CrudNotification<
    TDomainModel,
    DeleteDomainModel
  >

  @Input({ required: true }) name!: ActionTypeEnum

  @Input({ required: true }) tableButtonEnabled = true
  @Input({ required: true }) createButtonEnabled = true
  @Input({ required: true }) deleteButtonEnabled = true
  @Input({ required: true }) refreshButtonEnabled = true

  rows!: BaseTableFormRowModel<TDomainModel>[]

  constructor(private baseForm: BaseFormBuilder) {
    super()
  }

  ngOnInit() {
    this.onInit()
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
    })
    this.sub.add(
      this.store
        .select(this.select)
        .subscribe((data: BaseTableFormStoreModel<TDomainModel>) => {
          this.rows = data.rows
        }),
    )
  }

  ngOnDestroy() {
    this.onDestroy()
  }

  override onSubmit(domain: TableNavDomainModel) {
    if (domain.table) {
      this.store.dispatch(
        baseTableFormTabAction(this.name)({ tab: TableFormTabEnum.table }),
      )
    }
    else if (domain.create) {
      this.store.dispatch(
        baseTableFormTabAction(this.name)({ tab: TableFormTabEnum.create }),
      )
    }
    else if (domain.delete) {
      const ids = this.rows
        .filter(row => row.isSelected)
        .map(row => row.id)
      this.crud.runNotificationDelete({ ids })
    }
    else if (domain.refresh) {
      this.crud.runNotificationRead()
    }
  }
}
