import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'
import { faSquare, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

import { BaseComponentDirective, CrudNotification, ObjectTypeUtils, TextConvertUtils } from '@vet-client/lib-utils'
import { ButtonControlComponent, TextControlComponent } from '@vet-client/lib-control'
import { DeleteDomainModel } from '@vet-client/lib-domain'
import { BaseFormBuilder, ControlButtonModel } from '@vet-client/lib-base-form'
import { TableFormModel } from '../model/table-form.model'
import { baseTableFormDeleteAction, baseTableFormIsSelectedAction, BaseTableFormRowModel } from '@vet-client/lib-store'

@Component({
  selector: 'lib-table-data-form',
  imports: [CommonModule, TextControlComponent, ButtonControlComponent],
  templateUrl: './table-data-form.component.html',
  styleUrl: './table-data-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableDataFormComponent<TFormModel, TDomainModel>
implements OnInit {
  @Input({ required: true }) formModel!: TableFormModel<TFormModel>
  @Input({ required: true }) crudNotification!: CrudNotification<TDomainModel, DeleteDomainModel>
  @Input({ required: true }) rows!: BaseTableFormRowModel<TDomainModel>[]
  @Input({ required: true }) store!: Store

  readonly selectedButtonModel: ControlButtonModel
  readonly unselectedButtonModel: ControlButtonModel
  readonly deleteButtonModel: ControlButtonModel

  constructor(
    private baseForm: BaseFormBuilder,
    private textConvert: TextConvertUtils,
    private objectType: ObjectTypeUtils,
  ) {
    this.selectedButtonModel = this.baseForm
      .buildButtonIcon('checked', faSquareCheck, 'dark-secondary')
      .build()
    this.unselectedButtonModel = this.baseForm
      .buildButtonIcon('unchecked', faSquare, 'dark-secondary')
      .build()
    this.deleteButtonModel = <ControlButtonModel> this.baseForm
      .buildButtonIcon('delete', faTrash, 'error')
      .build()
  }

  ngOnInit() {
    this.crudNotification.runNotificationRead()
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

  onSelectRowEvent(id: number) {
    this.store.dispatch(baseTableFormIsSelectedAction({ id, isSelected: true }))
  }

  onUnselectRowEvent(id: number) {
    this.store.dispatch(baseTableFormIsSelectedAction({ id, isSelected: false }))
  }

  onDeleteEvent(id: number) {
    this.store.dispatch(baseTableFormDeleteAction({ id }))
  }

  // I am here
  // @Output() selectAllEvent = new EventEmitter<number>()
  // @Output() unselectAllEvent = new EventEmitter<number>()
  // @Output() deleteEvent = new EventEmitter<number>()
  // @Output() editSelectEvent = new EventEmitter<number>()
  //
  // @Input({ required: true }) headers!: string[]
  // @Input({ required: true }) rows!: TableFormRowsModel<TRows>
  // @Input({ required: true }) allSelected!: boolean
  //
  // readonly editButtonModel: ControlButtonModel
  //
  // constructor(
  //   private readonly controlButton: BaseFormBuilder,
  //   private baseForm: BaseFormBuilder,
  // ) {
  //   this.editButtonModel = <ControlButtonModel> this.baseForm
  //     .buildButtonIcon('edit', faSquare, 'primary')
  //     .build()
  // }
  //
  //
  // onSelectEvent(id: number) {
  //   this.selectEvent.emit(id)
  // }
  //
  // onUnselectEvent(id: number) {
  //   this.unselectEvent.emit(id)
  // }
  //
  // onDeleteEvent(id: number) {
  //   this.deleteEvent.emit(id)
  // }
  //
  // onEditSelectEvent(id: number) {
  //   this.editSelectEvent.emit(id)
  // }
}
