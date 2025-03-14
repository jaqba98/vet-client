// done
import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  faEdit,
  faSquare,
  faSquareCheck,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

import { ButtonControlComponent, TextControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { ControlButtonBuilder, ControlButtonModel } from '@vet-client/lib-base-form'
import { TableFormModel } from '../model/table-form.model'
import { TableFormRowModel, TableFormRowsModel } from '../model/table-form-rows.model'

@Component({
  selector: 'lib-table-data-form',
  imports: [CommonModule, ButtonControlComponent, TextControlComponent],
  templateUrl: './table-data-form.component.html',
  styleUrl: './table-data-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableDataFormComponent<TData> {
  @Input({ required: true }) data!: TableFormRowsModel<TData>

  @Input({ required: true }) formModel!: TableFormModel

  readonly selectedButtonModel: ControlButtonModel
  readonly unselectedButtonModel: ControlButtonModel
  readonly editButtonModel: ControlButtonModel
  readonly removeButtonModel: ControlButtonModel

  constructor(
    private readonly objectType: ObjectTypeUtils,
    private readonly controlButton: ControlButtonBuilder,
  ) {
    this.selectedButtonModel = this.controlButton
      .buildBase('checked')
      .buildIsSquare(true)
      .buildIcon(faSquareCheck, 'light-primary', '2rem')
      .buildColor('transparent')
      .build()
    this.unselectedButtonModel = this.controlButton
      .buildBase('unchecked')
      .buildIsSquare(true)
      .buildIcon(faSquare, 'light-primary', '2rem')
      .buildColor('transparent')
      .build()
    this.editButtonModel = this.controlButton
      .buildBase('edit')
      .buildIsSquare(true)
      .buildIcon(faEdit, 'light-primary', '1rem')
      .buildColor('primary')
      .build()
    this.removeButtonModel = this.controlButton
      .buildBase('remove')
      .buildIsSquare(true)
      .buildIcon(faTrash, 'light-primary', '1rem')
      .buildColor('error')
      .build()
  }

  getHeaders() {
    return Object.entries(this.formModel)
      .filter(([, value]) => value.isEnabled)
      .map(([key]) => key)
  }

  getColumn(row: TableFormRowModel<TData>['data'], header: string) {
    return this.objectType.getPropertyByDynamicKey(row, header)
  }
}
