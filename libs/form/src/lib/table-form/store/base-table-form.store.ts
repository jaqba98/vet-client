import { Inject, Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { HttpPostAppService } from '@vet-client/lib-http'
import { TableFormRowsModel } from '../model/table-form-rows.model'
import { TableTabEnum } from '../enum/table-tab.enum'
import { Router } from '@angular/router'
import { NUMBER_OF_ROWS_PER_PAGE } from '../const/table-form.const'

@Injectable()
export class BaseTableFormStore<TRows> {
  protected rows = new BehaviorSubject<TableFormRowsModel<TRows>>([])
  protected allRowsSelected = new BehaviorSubject<boolean>(false)
  protected createSuccess = new BehaviorSubject<string>('')
  protected createError = new BehaviorSubject<string>('')
  protected tab = new BehaviorSubject<TableTabEnum>(TableTabEnum.data)
  protected page = new BehaviorSubject<number>(1)

  rows$ = this.rows.asObservable()
  allRowsSelected$ = this.allRowsSelected.asObservable()
  createSuccess$ = this.createSuccess.asObservable()
  createError$ = this.createError.asObservable()
  tab$ = this.tab.asObservable()
  page$ = this.page.asObservable()

  constructor(
    protected cookie: CookieService,
    protected httpPost: HttpPostAppService,
    protected router: Router,
    @Inject('url') public url: string,
  ) {}

  setRows(rows: TableFormRowsModel<TRows>) {
    this.rows.next(rows)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(row: TRows) {
    throw new Error('Method not implemented.')
  }

  read() {
    throw new Error('Method not implemented.')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(ids: number[]) {
    throw new Error('Method not implemented.')
  }

  deleteAll() {
    const token = this.cookie.getToken()
    const ids = this.rows.getValue()
      .filter(row => row.isSelected)
      .map(row => row.id)
    this.httpPost.clinicDeletePost({ token, ids }).subscribe(() => {
      const newRows = this.rows.getValue().filter(row => !ids.includes(row.id))
      this.setRows(newRows)
      this.allRowsSelected.next(false)
    })
  }

  selectRow(id: number) {
    const newRows = this.rows.getValue().map((row) => {
      if (row.id === id) row.isSelected = true
      return row
    })
    const allRowsSelected = !newRows.some(row => !row.isSelected)
    this.rows.next(newRows)
    this.allRowsSelected.next(allRowsSelected)
  }

  unselectRow(id: number) {
    const newRows = this.rows.getValue().map((row) => {
      if (row.id === id) row.isSelected = false
      return row
    })
    this.rows.next(newRows)
    this.allRowsSelected.next(false)
  }

  selectAll() {
    const newRows = this.rows.getValue().map((row) => {
      row.isSelected = true
      return row
    })
    this.rows.next(newRows)
    this.allRowsSelected.next(true)
  }

  unselectAll() {
    const newRows = this.rows.getValue().map((row) => {
      row.isSelected = false
      return row
    })
    this.rows.next(newRows)
    this.allRowsSelected.next(false)
  }

  setCreateSuccess(msg: string) {
    this.createSuccess.next(msg)
  }

  setCreateError(msg: string) {
    this.createError.next(msg)
  }

  setTab(tab: TableTabEnum) {
    this.tab.next(tab)
  }

  setPage(page: number) {
    this.page.next(page)
  }

  nextPage() {
    const rows = this.rows.getValue()
    const page = this.page.getValue()
    const nextPage = page + 1
    if (nextPage > rows.length / NUMBER_OF_ROWS_PER_PAGE) return
    this.router.navigate([this.url + nextPage])
  }

  prevPage() {
    const page = this.page.getValue()
    const prevPage = page - 1
    if (prevPage <= 0) return
    this.router.navigate([this.url + prevPage])
  }

  firstPage() {
    this.router.navigate([this.url + 1])
  }

  lastPage() {
    const rows = this.rows.getValue()
    this.router.navigate([this.url + rows.length / NUMBER_OF_ROWS_PER_PAGE])
  }

  goToPage(id: string) {
    this.router.navigate([this.url + Number(id)])
  }
}
