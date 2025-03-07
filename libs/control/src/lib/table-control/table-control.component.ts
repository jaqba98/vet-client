import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { TableControlRowModel, TableControlRowsModel } from './table-control.model'

@Component({
  selector: 'lib-table-control',
  imports: [CommonModule],
  templateUrl: './table-control.component.html',
  styleUrl: './table-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableControlComponent {
  @Input({ required: true }) rows!: TableControlRowsModel

  constructor(private readonly objectType: ObjectTypeUtils) {
  }

  getColumns(row: TableControlRowModel) {
    return this.objectType.getKeys(row)
  }

  getColumn(row: TableControlRowModel, column: string) {
    return row[column].value
  }
}
