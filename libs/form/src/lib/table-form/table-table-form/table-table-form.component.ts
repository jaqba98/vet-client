import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { TableFormRowModel, TableFormRowsModel } from '../model/table-form.model'

@Component({
  selector: 'lib-table-table-form',
  imports: [CommonModule],
  templateUrl: './table-table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableTableFormComponent {
  @Input({ required: true }) rows!: TableFormRowsModel

  constructor(private readonly objectType: ObjectTypeUtils) {
  }

  getColumns(row: TableFormRowModel) {
    return this.objectType.getKeys(row)
  }

  getColumn(row: TableFormRowModel, column: string) {
    return row[column]
  }
}
