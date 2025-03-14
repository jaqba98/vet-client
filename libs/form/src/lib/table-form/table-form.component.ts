import { CommonModule } from '@angular/common'
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription } from 'rxjs'

import { TablePanelControlComponent } from '@vet-client/lib-control'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableFormModel } from './model/table-form.model'
import { TableDataFormComponent } from './table-data-form/table-data-form.component'
import { BaseTableFormStore } from './store/base-table-form.store'
import { TablePaginatorFormComponent } from './table-paginator-form/table-paginator-form.component'
import { TableEditFormComponent } from './table-edit-form/table-edit-form.component'
import { TableFormRowsModel } from './model/table-form-rows.model'
import { ClinicDomainDataModel, ClinicDomainResponseModel } from '@vet-client/lib-domain'
import { TableCreateFormComponent } from './table-create-form/table-create-form.component'

@Component({
  selector: 'lib-table-form',
  imports: [
    CommonModule,
    TablePanelControlComponent,
    TableNavFormComponent,
    TableDataFormComponent,
    TablePaginatorFormComponent,
    TableEditFormComponent,
    TableCreateFormComponent,
  ],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent<TStore> implements OnInit, OnDestroy {
  @Input({ required: true }) dispatchIsSelected!: (id: number, isSelected: boolean) => void
  @Input({ required: true }) dispatchCreate!: (clinic: ClinicDomainDataModel) => void
  @Input({ required: true }) dispatchDelete!: (id: number) => void
  @Input({ required: true }) dispatchEdit!: (id: number) => void
  @Input({ required: true }) selectPage!: () => Observable<{ page: number, maxPage: number }>
  @Input({ required: true }) selectTab!: () => Observable<string>
  @Input({ required: true }) dispatchTab!: (tab: string) => void

  @Input({ required: true })
  selectCreateResponse!: () => Observable<ClinicDomainResponseModel>

  @Input({ required: true }) selectRows!: () => Observable<TableFormRowsModel<TStore>>

  @Input({ required: true }) dispatchPage!: (page: number) => void
  @Input({ required: true }) store!: BaseTableFormStore<TStore>

  @Input() tableButtonEnabled = true
  @Input() addButtonEnabled = true
  @Input() removeButtonEnabled = true

  @Input({ required: true }) formModel!: TableFormModel

  tab!: string

  private readonly sub: Subscription

  constructor() {
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.sub.add(this.selectTab().subscribe((tab) => {
      this.tab = tab
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
