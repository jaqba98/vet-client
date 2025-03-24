import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store } from '@ngrx/store'

import {
  BaseComponentDirective,
  CrudNotification,
} from '@vet-client/lib-utils'
import { TablePanelControlComponent } from '@vet-client/lib-control'
import { TableFormModel } from './model/table-form.model'
import { TableFormTabEnum } from './enum/table-form-tab.enum'
import { TableDataFormComponent } from './table-data-form/table-data-form.component'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'
import { TableCreateFormComponent } from './table-create-form/table-create-form.component'
import { DeleteDomainModel } from '@vet-client/lib-domain'
import { BaseTableFormRowModel } from '@vet-client/lib-store'

@Component({
  selector: 'lib-table-form',
  imports: [
    CommonModule,
    TablePanelControlComponent,
    TableDataFormComponent,
    TableNavFormComponent,
    TableCreateFormComponent,
  ],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent<TFormModel, TDomainModel> {
  @Input({ required: true }) formModel!: TableFormModel<TFormModel>
  @Input({ required: true }) crudNotification!: CrudNotification<TDomainModel, DeleteDomainModel>
  @Input({ required: true }) rows!: BaseTableFormRowModel<TDomainModel>[]
  @Input({ required: true }) store!: Store
  @Input({ required: true }) allSelected!: boolean
  @Input({ required: true }) tab!: TableFormTabEnum
  @Input({ required: true }) crud!: CrudNotification<TDomainModel, DeleteDomainModel>

  @Input() tableButtonEnabled = true
  @Input() createButtonEnabled = true
  @Input() deleteButtonEnabled = true
  @Input() refreshButtonEnabled = true
  @Input() searchButtonEnabled = true

  onTableNavRefreshEvent() {
    //
  }

  isPaginator() {
    return this.tab === TableFormTabEnum.table
  }

  // I am here
  // @Output() selectAllEvent = new EventEmitter<number>()
  // @Output() unselectAllEvent = new EventEmitter<number>()
  // @Output() deleteSelectedEvent = new EventEmitter()
  // @Output() selectEvent = new EventEmitter<number>()
  // @Output() unselectEvent = new EventEmitter<number>()
  // @Output() createEvent = new EventEmitter<TData>()
  // @Output() tablePaginatorEvent = new EventEmitter<number>()
  // @Output() tableNavEvent = new EventEmitter<TableFormTabEnum>()
  // @Output() deleteEvent = new EventEmitter<number>()
  // @Output() refreshEvent = new EventEmitter<number>()
  // @Output() editSelectEvent = new EventEmitter<number>()
  // @Output() updateEvent = new EventEmitter<TData>()

  // @Input() page!: number
  // @Input() maxPage!: number
  // @Input() createSuccess!: string
  // @Input() createError!: string
  // @Input() editSuccess!: string
  // @Input() editError!: string
  // @Input() allSelected!: boolean
  // @Input() selectedClinic!: ClinicTableModel
  //
  // @Input() tableButtonEnabled = true
  // @Input() createButtonEnabled = true
  // @Input() deleteButtonEnabled = true
  // @Input() refreshButtonEnabled = true
  // @Input() searchButtonEnabled = true
  //
  // onTablePaginatorEvent(page: number) {
  //   this.tablePaginatorEvent.emit(page)
  // }
  //
  // onTableNavEvent(tag: TableFormTabEnum) {
  //   this.tableNavEvent.emit(tag)
  // }
  //
  // onDeleteSelectedEvent() {
  //   this.deleteSelectedEvent.emit()
  // }
  //
  // onDeleteEvent(id: number) {
  //   this.deleteEvent.emit(id)
  // }
  //
  // onRefreshEvent() {
  //   this.refreshEvent.emit()
  // }
  //
  // onCreateEvent(data: TData) {
  //   this.createEvent.emit(data)
  // }
  //
  // onSelectEvent(id: number) {
  //   this.selectEvent.emit(id)
  // }
  //
  // onUnselectEvent(id: number) {
  //   this.unselectEvent.emit(id)
  // }
  //
  // onSelectAllEvent() {
  //   this.selectAllEvent.emit()
  // }
  //
  // onUnselectAllEvent() {
  //   this.unselectAllEvent.emit()
  // }
  //
  // onEditSelectEvent(id: number) {
  //   this.editSelectEvent.emit(id)
  // }
  //
  // onUpdateEvent(data: any) {
  //   this.updateEvent.emit(data)
  // }

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
