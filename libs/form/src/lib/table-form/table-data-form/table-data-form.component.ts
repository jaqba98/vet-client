import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { Observable, Subscription } from 'rxjs'

import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { CookieService } from '@vet-client/lib-system'
import { BaseResponseModel, HttpPostAppService } from '@vet-client/lib-http'
import { TableFormModel, TableFormRowModel, TableFormRowsModel } from '../model/table-form.model'
import { ButtonControlComponent, ButtonControlModel } from '@vet-client/lib-control'
import { faSquare, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { TableFormDeleteAllService } from '../service/table-form-delete-all.service'
import { TableFormRefreshAllService } from '../service/table-form-refresh-all.service'

@Component({
  selector: 'lib-table-data-form',
  imports: [CommonModule, ButtonControlComponent],
  templateUrl: './table-data-form.component.html',
  styleUrl: './table-data-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableDataFormComponent implements OnInit {
  @Input({ required: true }) formModel!: TableFormModel
  @Input({ required: true }) callback!: (self: TableDataFormComponent) => Observable<TableFormRowsModel>
  @Input({ required: true }) removeCallback!: (ids: number[], self: TableDataFormComponent) => Observable<BaseResponseModel>

  rows!: TableFormRowsModel

  subDelete!: Subscription

  subRefresh!: Subscription

  readonly selectedButtonModel: ButtonControlModel = {
    id: 'checked',
    value: {
      type: 'icon',
      icon: {
        icon: faSquareCheck,
        color: 'dark-secondary',
        fontSize: '2rem',
      },
    },
    color: 'transparent',
    fullWidth: false,
  }

  readonly unselectedButtonModel: ButtonControlModel = {
    id: 'unchecked',
    value: {
      type: 'icon',
      icon: {
        icon: faSquare,
        color: 'dark-secondary',
        fontSize: '2rem',
      },
    },
    color: 'transparent',
    fullWidth: false,
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
    color: 'error',
    fullWidth: false,
  }

  constructor(
    public readonly cookie: CookieService,
    public readonly httpPost: HttpPostAppService,
    private readonly objectType: ObjectTypeUtils,
    private readonly tableFormDeleteAll: TableFormDeleteAllService,
    private readonly tableFormRefreshAll: TableFormRefreshAllService,
  ) {}

  ngOnInit() {
    this.callback(this).subscribe(data => this.rows = data)
    this.tableFormDeleteAll.getAction().subscribe(() => {
      const ids = this.rows.filter(row => row.isSelected).map(row => row.id)
      this.removeCallback(ids, this).subscribe(() => {
        this.rows = this.rows.filter(row => !ids.includes(row.id))
      })
    })
    this.tableFormRefreshAll.getAction().subscribe(() => {
      this.callback(this).subscribe(data => this.rows = data)
    })
  }

  onSelectEvent(id: number) {
    this.rows = this.rows.map((row) => {
      if (row.id === id) row.isSelected = true
      return row
    })
  }

  onUnselectEvent(id: number) {
    this.rows = this.rows.map((row) => {
      if (row.id === id) row.isSelected = false
      return row
    })
  }

  getHeaders() {
    return Object.entries(this.formModel)
      .filter(([, values]) => values.isEnabled)
      .map(([key]) => key)
  }

  getColumn(row: TableFormRowModel['data'], header: string) {
    return this.objectType.getPropertyByDynamicKey(row, header)
  }

  onRemoveButtonEvent(id: number) {
    this.removeCallback([id], this).subscribe(() => {
      this.rows = this.rows.filter(row => row.id !== id)
    })
  }
}
