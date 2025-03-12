import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { combineLatest, Subscription } from 'rxjs'
import {
  faEdit,
  faSquare,
  faSquareCheck,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

import {
  ButtonControlComponent,
  ButtonControlModel,
} from '@vet-client/lib-control'
import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { BaseTableFormStore } from '../store/base-table-form.store'
import { TableFormModel } from '../model/table-form.model'
import {
  TableFormRowModel,
  TableFormRowsModel,
} from '../model/table-form-rows.model'
import { NUMBER_OF_ROWS_PER_PAGE } from '../const/table-form.const'
import { TableTabEnum } from '../enum/table-tab.enum'

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

  rows!: TableFormRowsModel<TData>

  readonly selectedButtonModel: ButtonControlModel = {
    id: 'checked',
    value: {
      type: 'icon',
      icon: { icon: faSquareCheck, color: 'dark-secondary', fontSize: '2rem' },
    },
    color: 'transparent',
    fullWidth: false,
    width40px: false,
  }

  readonly unselectedButtonModel: ButtonControlModel = {
    id: 'unchecked',
    value: {
      type: 'icon',
      icon: { icon: faSquare, color: 'dark-secondary', fontSize: '2rem' },
    },
    color: 'transparent',
    fullWidth: false,
    width40px: false,
  }

  readonly editButtonModel: ButtonControlModel = {
    id: 'edit',
    value: {
      type: 'icon',
      icon: { icon: faEdit, color: 'light-primary', fontSize: '1rem' },
    },
    color: 'primary',
    fullWidth: false,
    width40px: false,
  }

  readonly removeButtonModel: ButtonControlModel = {
    id: 'remove',
    value: {
      type: 'icon',
      icon: { icon: faTrash, color: 'light-primary', fontSize: '1rem' },
    },
    color: 'error',
    fullWidth: false,
    width40px: false,
  }

  private sub = new Subscription()

  constructor(private readonly objectType: ObjectTypeUtils) {}

  ngOnInit() {
    this.sub.add(
      combineLatest([this.store.rows$, this.store.page$]).subscribe(
        ([rows, page]) => {
          const maxPage
            = rows.length === 0
              ? 1
              : Math.ceil(rows.length / NUMBER_OF_ROWS_PER_PAGE)
          if (page < 0 || page > maxPage) {
            this.store.goToPage('1')
            return
          }
          const pageFrom = (page - 1) * NUMBER_OF_ROWS_PER_PAGE
          const pageTo = pageFrom + NUMBER_OF_ROWS_PER_PAGE
          this.rows = rows.filter(
            (_, index) => index >= pageFrom && index < pageTo,
          )
        },
      ),
    )
  }

  getHeaders() {
    return Object.entries(this.formModel)
      .filter(([, value]) => value.isEnabled)
      .map(([key]) => key)
  }

  getColumn(row: TableFormRowModel<TData>['data'], header: string) {
    return this.objectType.getPropertyByDynamicKey(row, header)
  }

  onEditEvent(id: number) {
    this.store.setTab(TableTabEnum.edit)
    this.store.setEditRow(id)
  }
}
