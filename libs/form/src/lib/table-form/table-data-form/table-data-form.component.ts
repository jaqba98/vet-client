import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BaseComponentDirective, CrudNotification, ObjectTypeUtils, TextConvertUtils } from '@vet-client/lib-utils'
import { TableFormModel } from '../model/table-form.model'
import { TextControlComponent } from '@vet-client/lib-control'
import { DeleteDomainModel } from '@vet-client/lib-domain'
import { TableFormRowsModel } from '../model/table-form.rows.model'

@Component({
  selector: 'lib-table-data-form',
  imports: [CommonModule, TextControlComponent],
  templateUrl: './table-data-form.component.html',
  styleUrl: './table-data-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableDataFormComponent<TFormModel, TDomainModel>
implements OnInit {
  @Input({ required: true }) formModel!: TableFormModel<TFormModel>
  @Input({ required: true }) crudNotification!: CrudNotification<TDomainModel, DeleteDomainModel>
  @Input({ required: true }) rows!: TableFormRowsModel<TDomainModel>

  constructor(
    private textConvert: TextConvertUtils,
    private objectType: ObjectTypeUtils,
  ) {
  }

  ngOnInit() {
    this.crudNotification.runNotificationRead()
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

  // I am here
  // @Output() selectAllEvent = new EventEmitter<number>()
  // @Output() unselectAllEvent = new EventEmitter<number>()
  // @Output() selectEvent = new EventEmitter<number>()
  // @Output() unselectEvent = new EventEmitter<number>()
  // @Output() deleteEvent = new EventEmitter<number>()
  // @Output() editSelectEvent = new EventEmitter<number>()
  //
  // @Input({ required: true }) headers!: string[]
  // @Input({ required: true }) rows!: TableFormRowsModel<TRows>
  // @Input({ required: true }) allSelected!: boolean
  //
  // readonly selectedButtonModel: ControlButtonModel
  // readonly unselectedButtonModel: ControlButtonModel
  // readonly editButtonModel: ControlButtonModel
  // readonly deleteButtonModel: ControlButtonModel
  //
  // constructor(
  //   private readonly controlButton: BaseFormBuilder,
  //   private baseForm: BaseFormBuilder,
  // ) {
  //   this.selectedButtonModel = <ControlButtonModel> this.baseForm
  //     .buildButtonIcon('checked', faSquareCheck, 'light-primary')
  //     .build()
  //   this.unselectedButtonModel = <ControlButtonModel> this.baseForm
  //     .buildButtonIcon('unchecked', faSquare, 'light-primary')
  //     .build()
  //   this.editButtonModel = <ControlButtonModel> this.baseForm
  //     .buildButtonIcon('edit', faSquare, 'primary')
  //     .build()
  //   this.deleteButtonModel = <ControlButtonModel> this.baseForm
  //     .buildButtonIcon('delete', faTrash, 'error')
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
  // onSelectAllEvent() {
  //   this.selectAllEvent.emit()
  // }
  //
  // onUnselectAllEvent() {
  //   this.unselectAllEvent.emit()
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
