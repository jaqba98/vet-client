import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'
import { faPenToSquare, faSquare, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs'

import { BaseComponentDirective, CrudNotification, ObjectTypeUtils, TextConvertUtils } from '@vet-client/lib-utils'
import { ButtonControlComponent, TextControlComponent } from '@vet-client/lib-control'
import { DeleteDomainModel } from '@vet-client/lib-domain'
import { BaseFormBuilder, ControlButtonModel } from '@vet-client/lib-base-form'
import {
  baseTableFormIsSelectedAction,
  BaseTableFormRowModel, BaseTableFormStoreModel,
  baseTableFormTabAction, baseTableFormUpdateSelectedRow,
} from '@vet-client/lib-store'
import { TableFormModel } from '../model/table-form.model'
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
  private readonly sub: Subscription

  @Input({ required: true }) formModel!: TableFormModel<TFormModel>
  @Input({ required: true }) crud!: CrudNotification<TDomainModel, DeleteDomainModel>
  // eslint-disable-next-line
  @Input({ required: true }) store!: Store<any>;
  @Input({ required: true }) select!: string

  readonly selectedButtonModel: ControlButtonModel
  readonly unselectedButtonModel: ControlButtonModel
  readonly deleteButtonModel: ControlButtonModel
  readonly editButtonModel: ControlButtonModel

  rows!: BaseTableFormRowModel<TDomainModel>[]
  allSelected!: boolean

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
      this.rows = data.rows
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
    return this.getHeaderKeys().map(header =>
      this.textConvert.camelToPascalWithSpaces(header),
    )
  }

  getColumn(row: TDomainModel, header: string) {
    return this.objectType.getPropertyByDynamicKey(row, header)
  }

  onSelectAllEvent() {
    const ids = this.rows.map(row => row.id)
    this.store.dispatch(
      baseTableFormIsSelectedAction({ ids, isSelected: true }),
    )
  }

  onUnselectAllEvent() {
    const ids = this.rows.map(row => row.id)
    this.store.dispatch(
      baseTableFormIsSelectedAction({ ids, isSelected: false }),
    )
  }

  onSelectRowEvent(id: number) {
    this.store.dispatch(
      baseTableFormIsSelectedAction({ ids: [id], isSelected: true }),
    )
  }

  onUnselectRowEvent(id: number) {
    this.store.dispatch(
      baseTableFormIsSelectedAction({ ids: [id], isSelected: false }),
    )
  }

  onEditRowEvent(id: number) {
    const row = this.rows.find(row => row.id === id)
    if (row) {
      this.store.dispatch(
        baseTableFormTabAction()({ tab: TableFormTabEnum.update }),
      )
      this.store.dispatch(baseTableFormUpdateSelectedRow()({ row: row }))
    }
  }

  onDeleteRowEvent(id: number) {
    this.crud.runNotificationDelete({ ids: [id] })
  }
}
