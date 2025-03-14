// done
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { faEdit, faSquare, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { ButtonControlComponent, TextControlComponent } from '@vet-client/lib-control'
import { ControlButtonBuilder, ControlButtonModel } from '@vet-client/lib-base-form'
import { TableFormRowModel, TableFormRowsModel } from '../model/table-form-rows.model'

@Component({
  selector: 'lib-table-data-form',
  imports: [CommonModule, TextControlComponent, ButtonControlComponent],
  templateUrl: './table-data-form.component.html',
  styleUrl: './table-data-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableDataFormComponent<TRows> {
  @Output() selectEvent = new EventEmitter<number>()
  @Output() unselectEvent = new EventEmitter<number>()
  @Output() deleteEvent = new EventEmitter<number>()

  @Input({ required: true }) headers!: string[]
  @Input({ required: true }) rows!: TableFormRowsModel<TRows>

  readonly selectedButtonModel: ControlButtonModel
  readonly unselectedButtonModel: ControlButtonModel
  readonly editButtonModel: ControlButtonModel
  readonly deleteButtonModel: ControlButtonModel

  constructor(
    private readonly objectType: ObjectTypeUtils,
    private readonly controlButton: ControlButtonBuilder,
  ) {
    this.selectedButtonModel = this.controlButton
      .buildBase('checked')
      .buildIsSquare(true)
      .buildIcon(faSquareCheck, 'light-primary', '2rem')
      .buildColor('dark-secondary')
      .build()
    this.unselectedButtonModel = this.controlButton
      .buildBase('unchecked')
      .buildIsSquare(true)
      .buildIcon(faSquare, 'light-primary', '2rem')
      .buildColor('dark-secondary')
      .build()
    this.editButtonModel = this.controlButton
      .buildBase('edit')
      .buildIsSquare(true)
      .buildIcon(faEdit, 'light-primary', '1rem')
      .buildColor('primary')
      .build()
    this.deleteButtonModel = this.controlButton
      .buildBase('delete')
      .buildIsSquare(true)
      .buildIcon(faTrash, 'light-primary', '1rem')
      .buildColor('error')
      .build()
  }

  getColumn(row: TableFormRowModel<TRows>['data'], header: string) {
    return this.objectType.getPropertyByDynamicKey(row, header)
  }

  onSelectEvent(id: number) {
    this.selectEvent.emit(id)
  }

  onUnselectEvent(id: number) {
    this.unselectEvent.emit(id)
  }

  onDeleteEvent(id: number) {
    this.deleteEvent.emit(id)
  }

  onEditEvent(id: number) {
    //
  }
}
