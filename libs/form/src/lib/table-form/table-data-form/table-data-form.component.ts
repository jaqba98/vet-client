// done
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { faEdit, faSquare, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { ButtonControlComponent, TextControlComponent } from '@vet-client/lib-control'
import { BaseFormBuilder, ControlButtonModel } from '@vet-client/lib-base-form'
import { TableFormRowModel, TableFormRowsModel } from '../model/table-form-rows.model'

@Component({
  selector: 'lib-table-data-form',
  imports: [CommonModule, TextControlComponent, ButtonControlComponent],
  templateUrl: './table-data-form.component.html',
  styleUrl: './table-data-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableDataFormComponent<TRows> {
  @Output() selectAllEvent = new EventEmitter<number>()
  @Output() unselectAllEvent = new EventEmitter<number>()
  @Output() selectEvent = new EventEmitter<number>()
  @Output() unselectEvent = new EventEmitter<number>()
  @Output() deleteEvent = new EventEmitter<number>()
  @Output() editSelectEvent = new EventEmitter<number>()

  @Input({ required: true }) headers!: string[]
  @Input({ required: true }) rows!: TableFormRowsModel<TRows>
  @Input({ required: true }) allSelected!: boolean

  readonly selectedButtonModel: ControlButtonModel
  readonly unselectedButtonModel: ControlButtonModel
  readonly editButtonModel: ControlButtonModel
  readonly deleteButtonModel: ControlButtonModel

  constructor(
    private readonly objectType: ObjectTypeUtils,
    private readonly controlButton: BaseFormBuilder,
    private baseForm: BaseFormBuilder,
  ) {
    this.selectedButtonModel = <ControlButtonModel> this.baseForm
      .buildButtonIcon('checked', faSquareCheck, 'light-primary')
      .build()
    this.unselectedButtonModel = <ControlButtonModel> this.baseForm
      .buildButtonIcon('unchecked', faSquare, 'light-primary')
      .build()
    this.editButtonModel = <ControlButtonModel> this.baseForm
      .buildButtonIcon('edit', faSquare, 'primary')
      .build()
    this.deleteButtonModel = <ControlButtonModel> this.baseForm
      .buildButtonIcon('delete', faTrash, 'error')
      .build()
  }

  getColumn(row: TableFormRowModel<TRows>['domain'], header: string) {
    return this.objectType.getPropertyByDynamicKey(row, header)
  }

  onSelectEvent(id: number) {
    this.selectEvent.emit(id)
  }

  onUnselectEvent(id: number) {
    this.unselectEvent.emit(id)
  }

  onSelectAllEvent() {
    this.selectAllEvent.emit()
  }

  onUnselectAllEvent() {
    this.unselectAllEvent.emit()
  }

  onDeleteEvent(id: number) {
    this.deleteEvent.emit(id)
  }

  onEditSelectEvent(id: number) {
    this.editSelectEvent.emit(id)
  }
}
