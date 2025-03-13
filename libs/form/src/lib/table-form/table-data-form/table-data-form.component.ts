// done
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  faEdit,
  faSquare,
  faSquareCheck,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { combineLatest, Subscription } from 'rxjs'

import { ButtonControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { ControlButtonBuilder, ControlButtonModel } from '@vet-client/lib-base-form'
import { BaseTableFormStore } from '../store/base-table-form.store'
import { TableFormModel } from '../model/table-form.model'
import { TableFormRowModel, TableFormRowsModel } from '../model/table-form-rows.model'
import { NUMBER_OF_ROWS_PER_PAGE } from '../const/table-form.const'

@Component({
  selector: 'lib-table-data-form',
  imports: [CommonModule, ButtonControlComponent],
  templateUrl: './table-data-form.component.html',
  styleUrl: './table-data-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableDataFormComponent<TStore> implements OnInit, OnDestroy {
  @Input({ required: true }) store!: BaseTableFormStore<TStore>

  @Input({ required: true }) formModel!: TableFormModel

  rows!: TableFormRowsModel<TStore>

  readonly selectedButtonModel: ControlButtonModel
  readonly unselectedButtonModel: ControlButtonModel
  readonly editButtonModel: ControlButtonModel
  readonly removeButtonModel: ControlButtonModel

  private sub: Subscription

  constructor(
    private readonly objectType: ObjectTypeUtils,
    private readonly controlButton: ControlButtonBuilder,
  ) {
    this.sub = new Subscription()
    this.selectedButtonModel = this.controlButton
      .buildBase('checked')
      .buildIsSquare(true)
      .buildIcon(faSquareCheck, 'light-primary', '2rem')
      .buildColor('transparent')
      .build()
    this.unselectedButtonModel = this.controlButton
      .buildBase('unchecked')
      .buildIsSquare(true)
      .buildIcon(faSquare, 'light-primary', '2rem')
      .buildColor('transparent')
      .build()
    this.editButtonModel = this.controlButton
      .buildBase('edit')
      .buildIsSquare(true)
      .buildIcon(faEdit, 'light-primary', '1rem')
      .buildColor('primary')
      .build()
    this.removeButtonModel = this.controlButton
      .buildBase('remove')
      .buildIsSquare(true)
      .buildIcon(faTrash, 'light-primary', '1rem')
      .buildColor('error')
      .build()
  }

  ngOnInit() {
    this.sub.add(combineLatest([this.store.rows$, this.store.page$]).subscribe(([rows, page]) => {
      const maxPage = rows.length === 0 ? 1 : Math.ceil(rows.length / NUMBER_OF_ROWS_PER_PAGE)
      if (page < 0 || page > maxPage) {
        this.store.goToPage('1')
        return
      }
      const pageFrom = (page - 1) * NUMBER_OF_ROWS_PER_PAGE
      const pageTo = pageFrom + NUMBER_OF_ROWS_PER_PAGE
      this.rows = rows.filter((_, index) => index >= pageFrom && index < pageTo)
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  getHeaders() {
    return Object.entries(this.formModel)
      .filter(([, value]) => value.isEnabled)
      .map(([key]) => key)
  }

  getColumn(row: TableFormRowModel<TStore>['data'], header: string) {
    return this.objectType.getPropertyByDynamicKey(row, header)
  }
}
