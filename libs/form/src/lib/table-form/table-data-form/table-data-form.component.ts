// done
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  faEdit,
  faSquare,
  faSquareCheck,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { Observable, Subscription } from 'rxjs'

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
export class TableDataFormComponent<TData> implements OnInit, OnDestroy {
  @Input({ required: true }) dispatchIsSelected!: (id: number, isSelected: boolean) => void
  @Input({ required: true }) dispatchDelete!: (id: number) => void
  @Input({ required: true }) dispatchEdit!: (id: number) => void
  @Input({ required: true }) selectRows!: () => Observable<TableFormRowsModel<TData>>
  @Input({ required: true }) formModel!: TableFormModel

  readonly selectedButtonModel: ControlButtonModel
  readonly unselectedButtonModel: ControlButtonModel
  readonly editButtonModel: ControlButtonModel
  readonly removeButtonModel: ControlButtonModel

  rows!: TableFormRowsModel<TData>

  private readonly sub: Subscription

  constructor(
    private readonly objectType: ObjectTypeUtils,
    private readonly controlButton: ControlButtonBuilder,
  ) {
    this.sub = new Subscription()
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
    this.removeButtonModel = this.controlButton
      .buildBase('remove')
      .buildIsSquare(true)
      .buildIcon(faTrash, 'light-primary', '1rem')
      .buildColor('error')
      .build()
  }

  ngOnInit() {
    this.sub.add(this.selectRows().subscribe((rows) => {
      this.rows = rows
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  getHeaders() {
    return Object.entries(this.formModel)
      .filter(([, value]) => value.isEnabled)
      .map(([key]) => key)
  }

  getColumn(row: TableFormRowModel<TData>['data'], header: string) {
    return this.objectType.getPropertyByDynamicKey(row, header)
  }

  onSelectEvent(id: number) {
    this.dispatchIsSelected(id, true)
  }

  onUnselectEvent(id: number) {
    this.dispatchIsSelected(id, false)
  }

  onRemoveEvent(id: number) {
    this.dispatchDelete(id)
  }

  onEditEvent(id: number) {
    this.dispatchEdit(id)
  }
}
