import { CommonModule } from '@angular/common'
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { TablePanelControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective, CrudNotification } from '@vet-client/lib-utils'
import { ActionTypeEnum, BaseTableFormStoreModel } from '@vet-client/lib-store'
import { DeleteDomainModel } from '@vet-client/lib-domain'
import { TableFormStoreModel } from './model/table-form-store.model'
import { TableFormModel } from './model/table-form.model'
import { TableFormTabEnum } from './enum/table-form-tab.enum'
import { TableCreateFormComponent } from './table-create-form/table-create-form.component'
import { TableUpdateFormComponent } from './table-update-form/table-update-form.component'
import { TableDataFormComponent } from './table-data-form/table-data-form.component'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'
import { TablePaginatorFormComponent } from './table-paginator-form/table-paginator-form.component'

@Component({
  selector: 'lib-table-form',
  imports: [
    CommonModule,
    TablePanelControlComponent,
    TableDataFormComponent,
    TableNavFormComponent,
    TableCreateFormComponent,
    TableUpdateFormComponent,
    TablePaginatorFormComponent,
  ],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent<TFormModel, TDomainModel>
implements OnInit, OnDestroy {
  @Input({ required: true }) select!: string
  @Input({ required: true }) store!: Store<TableFormStoreModel>
  @Input({ required: true }) crud!: CrudNotification<TDomainModel, DeleteDomainModel>
  @Input({ required: true }) formModel!: TableFormModel<TFormModel>
  @Input({ required: true }) path!: string
  @Input({ required: true }) name!: ActionTypeEnum

  @Input() tableButtonEnabled = true
  @Input() createButtonEnabled = true
  @Input() deleteButtonEnabled = true
  @Input() refreshButtonEnabled = true

  tab!: string

  private readonly sub: Subscription

  constructor() {
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.sub.add(this.store.select(this.select).subscribe((data: BaseTableFormStoreModel<TDomainModel>) => {
      this.tab = data.tab
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  isPaginator() {
    return this.tab === TableFormTabEnum.table
  }
}
