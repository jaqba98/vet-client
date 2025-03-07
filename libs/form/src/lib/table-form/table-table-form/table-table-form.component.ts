import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { TableFormRowsModel } from '../model/table-form.model'
import { TableControlComponent, TableControlRowModel } from '@vet-client/lib-control'

@Component({
  selector: 'lib-table-table-form',
  imports: [CommonModule, TableControlComponent],
  templateUrl: './table-table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableTableFormComponent {
  @Input({ required: true }) rows!: TableFormRowsModel

  constructor(private readonly objectType: ObjectTypeUtils) {}

  getTableControlRows() {
    return this.rows.map((row) => {
      const newRow: TableControlRowModel = {}
      this.objectType.getKeys(row).forEach((key) => {
        newRow[key] = { value: row[key] }
      })
      return newRow
    })
  }
}
