import { CommonModule } from '@angular/common'
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import {
  faPenToSquare,
  faSquare,
  faSquareCheck,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

import {
  ButtonControlComponent,
  TextControlComponent,
} from '@vet-client/lib-control'
import {
  BaseComponentDirective,
  CrudNotification,
  ObjectTypeUtils,
  TextConvertUtils,
} from '@vet-client/lib-utils'
import { DeleteDomainModel } from '@vet-client/lib-domain'
import {
  ActionTypeEnum,
  baseTableFormIsSelectedAction,
  BaseTableFormRowModel,
  BaseTableFormStoreModel,
  baseTableFormTabAction,
  baseTableFormUpdateSelectedRow,
} from '@vet-client/lib-store'
import { NUMBER_OF_ROWS_PER_PAGE } from '@vet-client/lib-const'
import { BaseFormBuilder, ControlButtonModel } from '@vet-client/lib-base-form'
import { TableFormModel } from '../model/table-form.model'
import { TableFormStoreModel } from '../model/table-form-store.model'
import { TableFormTabEnum } from '../enum/table-form-tab.enum'

@Component({
  selector: 'lib-table-data-form',
  imports: [CommonModule, TextControlComponent, ButtonControlComponent],
  templateUrl: './table-data-form.component.html',
  styleUrl: './table-data-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableDataFormComponent<TFormModel, TDomainModel>
implements OnInit, OnDestroy {
  @Input({ required: true }) formModel!: TableFormModel<TFormModel>
  @Input({ required: true }) crud!: CrudNotification<TDomainModel, DeleteDomainModel>
  @Input({ required: true }) store!: Store<TableFormStoreModel>
  @Input({ required: true }) select!: string
  @Input({ required: true }) name!: ActionTypeEnum

  readonly selectedButtonModel: ControlButtonModel
  readonly unselectedButtonModel: ControlButtonModel
  readonly deleteButtonModel: ControlButtonModel
  readonly editButtonModel: ControlButtonModel

  rows!: BaseTableFormRowModel<TDomainModel>[]
  allSelected!: boolean

  private readonly sub: Subscription

  constructor(
    private baseForm: BaseFormBuilder,
    private textConvert: TextConvertUtils,
    private objectType: ObjectTypeUtils,
  ) {
    this.sub = new Subscription()
    this.selectedButtonModel = this.baseForm
      .buildButtonIcon('checked', faSquareCheck, 'dark-secondary')
      .build()
    this.unselectedButtonModel = this.baseForm
      .buildButtonIcon('unchecked', faSquare, 'dark-secondary')
      .build()
    this.deleteButtonModel = this.baseForm
      .buildButtonIcon('delete', faTrash, 'error')
      .build()
    this.editButtonModel = this.baseForm
      .buildButtonIcon('edit', faPenToSquare, 'primary')
      .build()
  }

  ngOnInit() {
    this.crud.runNotificationRead()
    this.sub.add(this.store.select(this.select).subscribe((data: BaseTableFormStoreModel<TDomainModel>) => {
      this.selectRows(data.rows, data.page)
      this.allSelected = !data.rows.some(row => !row.isSelected) && data.rows.length > 0
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  getHeaderKeys() {
    return Object.keys(this.formModel)
  }

  getHeaders() {
    return this.getHeaderKeys().map(header => this.textConvert.camelToPascalWithSpaces(header))
  }

  getColumn(row: TDomainModel, header: string) {
    return this.objectType.getPropertyByDynamicKey(row, header)
  }

  getRemainRows() {
    return new Array(10 - this.rows.length)
  }

  onSelectAllEvent() {
    const ids = this.rows.map(row => row.id)
    this.store.dispatch(baseTableFormIsSelectedAction(this.name)({ ids, isSelected: true }))
  }

  onUnselectAllEvent() {
    const ids = this.rows.map(row => row.id)
    this.store.dispatch(baseTableFormIsSelectedAction(this.name)({ ids, isSelected: false }))
  }

  onSelectRowEvent(id: number) {
    this.store.dispatch(baseTableFormIsSelectedAction(this.name)({ ids: [id], isSelected: true }))
  }

  onUnselectRowEvent(id: number) {
    this.store.dispatch(baseTableFormIsSelectedAction(this.name)({ ids: [id], isSelected: false }))
  }

  onEditRowEvent(id: number) {
    const row = this.rows.find(row => row.id === id)
    if (row) {
      this.store.dispatch(baseTableFormTabAction(this.name)({ tab: TableFormTabEnum.update }))
      this.store.dispatch(baseTableFormUpdateSelectedRow(this.name)({ row: row }))
    }
  }

  onDeleteRowEvent(id: number) {
    this.crud.runNotificationDelete({ ids: [id] })
  }

  private selectRows(rows: BaseTableFormRowModel<TDomainModel>[], page: number) {
    const firstItem = (page - 1) * NUMBER_OF_ROWS_PER_PAGE
    const lastItem = firstItem + NUMBER_OF_ROWS_PER_PAGE
    this.rows = rows.filter((_, index) => index >= firstItem && index < lastItem)
  }
}
