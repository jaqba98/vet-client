import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import {
  faEdit,
  faSquare,
  faSquareCheck,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { ButtonControlComponent, ButtonControlModel } from '@vet-client/lib-control'
import { TableFormService } from '../service/table-form.service'
import { TableFormRowModel, TableFormRowsModel } from '../model/table-form.model'

@Component({
  selector: 'lib-table-table-form',
  imports: [CommonModule, ButtonControlComponent],
  templateUrl: './table-table-form.component.html',
  styleUrl: './table-table-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableTableFormComponent implements OnInit {
  @Input({ required: true }) service!: TableFormService

  rows!: TableFormRowsModel

  readonly selectButtonModel: ButtonControlModel = {
    id: 'select',
    value: {
      type: 'icon',
      icon: {
        icon: faSquareCheck,
        color: 'light-primary',
        fontSize: '2rem',
      },
    },
    fullWidth: false,
    color: 'primary',
  }

  readonly unselectButtonModel: ButtonControlModel = {
    id: 'unselect',
    value: {
      type: 'icon',
      icon: {
        icon: faSquare,
        color: 'light-primary',
        fontSize: '2rem',
      },
    },
    fullWidth: false,
    color: 'primary',
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
    color: 'primary',
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

  constructor(private readonly objectType: ObjectTypeUtils) {}

  ngOnInit() {
    this.service.rows$.subscribe(rows => (this.rows = rows))
  }

  getColumns(row: TableFormRowModel) {
    return this.objectType.getKeys(row.data)
  }

  getColumn(row: TableFormRowModel, column: string) {
    return row.data[column]
  }

  onSelectButtonClick(id: string) {
    this.service.changeSelect(id, true)
  }

  onUnselectButtonClick(id: string) {
    this.service.changeSelect(id, false)
  }

  onRemoveButtonClick(id: string) {
    this.service.remove(id)
  }
}
