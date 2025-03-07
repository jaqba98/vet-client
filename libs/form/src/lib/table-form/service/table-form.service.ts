import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { TableFormRowsModel } from '../model/table-form.model'

@Injectable()
export class TableFormService {
  private rows = new BehaviorSubject<TableFormRowsModel>([])

  rows$ = this.rows.asObservable()

  setRows(rows: TableFormRowsModel) {
    this.rows.next(rows)
  }

  remove(id: string) {
    this.rows.next(this.rows.getValue().filter(row => row.id !== id))
  }

  changeSelect(id: string, select: boolean) {
    const newRows = this.rows.getValue().map((row) => {
      if (row.id === id) {
        row.isSelected = select
      }
      return row
    })
    this.rows.next(newRows)
  }
}
