import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core'
import {
  faEdit,
  faSquare,
  faSquareCheck,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs'

import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { ButtonControlComponent, ButtonControlModel } from '@vet-client/lib-control'
import { TableFormService } from '../service/table-form.service'
import { TableFormHeadersModel, TableFormRowModel, TableFormRowsModel } from '../model/table-form.model'

@Component({
  selector: 'lib-table-table-form',
  imports: [CommonModule, ButtonControlComponent],
  templateUrl: './table-table-form.component.html',
  styleUrl: './table-table-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableTableFormComponent implements OnInit, OnDestroy {
  @Output() unselectEvent = new EventEmitter<string>()
  @Output() selectEvent = new EventEmitter<string>()
  @Output() editEvent = new EventEmitter<string>()
  @Output() removeEvent = new EventEmitter<string>()

  @Input({ required: true }) service!: TableFormService
  @Input({ required: true }) headers!: TableFormHeadersModel

  rows!: TableFormRowsModel

  private sub: Subscription

  readonly selectButtonModel: ButtonControlModel = {
    id: 'select',
    value: {
      type: 'icon',
      icon: {
        icon: faSquareCheck,
        color: 'primary',
        fontSize: '2rem',
      },
    },
    fullWidth: false,
    color: 'transparent',
  }

  readonly unselectButtonModel: ButtonControlModel = {
    id: 'unselect',
    value: {
      type: 'icon',
      icon: {
        icon: faSquare,
        color: 'primary',
        fontSize: '2rem',
      },
    },
    fullWidth: false,
    color: 'transparent',
  }

  readonly editButtonModel: ButtonControlModel = {
    id: 'edit',
    value: {
      type: 'icon',
      icon: {
        icon: faEdit,
        color: 'light-primary',
        fontSize: '1rem',
      },
    },
    fullWidth: false,
    color: 'dark-secondary',
  }

  readonly removeButtonModel: ButtonControlModel = {
    id: 'remove',
    value: {
      type: 'icon',
      icon: {
        icon: faTrash,
        color: 'light-primary',
        fontSize: '1rem',
      },
    },
    fullWidth: false,
    color: 'error',
  }

  constructor(private readonly objectType: ObjectTypeUtils) {
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.sub.add(this.service.rows$.subscribe(rows => (this.rows = rows)))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  getColumns(row: TableFormRowModel) {
    return this.objectType.getKeys(row.data)
  }

  getColumn(row: TableFormRowModel, column: string) {
    return row.data[column]
  }

  onUnselectButtonClick(id: string) {
    this.unselectEvent.emit(id)
  }

  onSelectButtonClick(id: string) {
    this.selectEvent.emit(id)
  }

  onEditButtonClick(id: string) {
    this.editEvent.emit(id)
  }

  onRemoveButtonClick(id: string) {
    this.removeEvent.emit(id)
  }
}
