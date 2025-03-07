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

  setIsSelected(id: string, value: boolean) {
    const newRows = this.rows.getValue().map((row) => {
      if (row.id === id) row.isSelected = value
      return row
    })
    this.rows.next(newRows)
  }
}
