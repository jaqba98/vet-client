import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

import { TablePanelControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TablePaginatorFormComponent } from './table-paginator-form/table-paginator-form.component'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'
import { TableFormTabEnum } from './enum/table-form-tab.enum'
import { TableDataFormComponent } from './table-data-form/table-data-form.component'
import { TableFormModel } from './model/table-form.model'
import { TableFormRowsModel } from './model/table-form-rows.model'
import { TableCreateFormComponent } from './table-create-form/table-create-form.component'

@Component({
  selector: 'lib-table-form',
  imports: [
    CommonModule,
    TablePanelControlComponent,
    TablePaginatorFormComponent,
    TableNavFormComponent,
    TableDataFormComponent,
    TableCreateFormComponent,
  ],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent<TRows, TData> {
  @Output() createEvent = new EventEmitter<TData>()
  @Output() tablePaginatorEvent = new EventEmitter<number>()
  @Output() tableNavEvent = new EventEmitter<TableFormTabEnum>()
  @Output() deleteEvent = new EventEmitter<number>()

  @Input({ required: true }) formModel!: TableFormModel
  @Input({ required: true }) headers!: string[]
  @Input({ required: true }) page!: number
  @Input({ required: true }) maxPage!: number
  @Input({ required: true }) tab!: TableFormTabEnum
  @Input({ required: true }) rows!: TableFormRowsModel<TRows>
  @Input({ required: true }) createSuccess!: string
  @Input({ required: true }) createError!: string

  @Input() tableButtonEnabled = true
  @Input() createButtonEnabled = true
  @Input() deleteButtonEnabled = true
  @Input() refreshButtonEnabled = true
  @Input() searchButtonEnabled = true

  onTablePaginatorEvent(page: number) {
    this.tablePaginatorEvent.emit(page)
  }

  onTableNavEvent(tag: TableFormTabEnum) {
    this.tableNavEvent.emit(tag)
  }

  onDeleteSelectedEvent() {
    //
  }

  onDeleteEvent(id: number) {
    this.deleteEvent.emit(id)
  }

  onRefreshEvent() {
    //
  }

  onCreateEvent(data: TData) {
    this.createEvent.emit(data)
  }

  // @Input({ required: true }) selectPage!: () => Observable<number>
  // @Input({ required: true }) selectMaxPage!: () => Observable<number>
  //
  // @Input({ required: true }) dispatchPage!: (page: number) => void
  // @Input({ required: true }) dispatchMaxPage!: () => void
  //
  // // I am here
  // @Input({ required: true }) dispatchIsSelected!: (id: number, isSelected: boolean) => void
  // @Input({ required: true }) dispatchCreate!: (clinic: ClinicDomainDataModel) => void
  // @Input({ required: true }) dispatchDelete!: (id: number) => void
  // @Input({ required: true }) dispatchEdit!: (id: number) => void
  // @Input({ required: true }) selectTab!: () => Observable<string>
  // @Input({ required: true }) dispatchTab!: (tab: string) => void
  //
  // @Input({ required: true })
  // selectCreateResponse!: () => Observable<ClinicDomainResponseModel>
  //
  // @Input({ required: true }) selectRows!: () => Observable<TableFormRowsModel<TStore>>
  //
  // @Input() tableButtonEnabled = true
  // @Input() addButtonEnabled = true
  // @Input() removeButtonEnabled = true
  //
  // @Input({ required: true }) formModel!: TableFormModel
  //
  // tab!: string
  //
  // private readonly sub: Subscription
  //
  // constructor() {
  //   this.sub = new Subscription()
  // }
  //
  // ngOnInit() {
  //   this.sub.add(this.selectTab().subscribe((tab) => {
  //     this.tab = tab
  //   }))
  // }
  //
  // ngOnDestroy() {
  //   this.sub.unsubscribe()
  // }
}
