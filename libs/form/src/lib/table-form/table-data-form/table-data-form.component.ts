import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { combineLatest } from 'rxjs'

import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { CookieService } from '@vet-client/lib-system'
import { HttpPostAppService } from '@vet-client/lib-http'
import { TableFormModel } from '../model/table-form.model'
import { ButtonControlComponent, ButtonControlModel } from '@vet-client/lib-control'
import { faSquare, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { TableFormRowModel, TableFormRowsModel } from '../model/table-form-rows.model'
import { BaseTableFormStore } from '../store/base-table-form.store'

@Component({
  selector: 'lib-table-data-form',
  imports: [CommonModule, ButtonControlComponent],
  templateUrl: './table-data-form.component.html',
  styleUrl: './table-data-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableDataFormComponent<TData> implements OnInit {
  @Input({ required: true }) store!: BaseTableFormStore<TData>

  @Input({ required: true }) formModel!: TableFormModel

  rows!: TableFormRowsModel<unknown>

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
    width40px: false,
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
    width40px: false,
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
    width40px: false,
  }

  constructor(
    public readonly cookie: CookieService,
    public readonly httpPost: HttpPostAppService,
    private readonly objectType: ObjectTypeUtils,
  ) {}

  ngOnInit() {
    combineLatest([this.store.rows$, this.store.page$]).subscribe(([rows, page]) => {
      this.rows = rows.filter((_, index) => index >= page && index <= page + 5)
    })
  }

  getHeaders() {
    return Object.entries(this.formModel)
      .filter(([, values]) => values.isEnabled)
      .map(([key]) => key)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getColumn(row: TableFormRowModel<any>['data'], header: string) {
    return this.objectType.getPropertyByDynamicKey(row, header)
  }
}
