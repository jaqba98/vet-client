import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

import { TablePanelControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TablePaginatorFormComponent } from './table-paginator-form/table-paginator-form.component'

@Component({
  selector: 'lib-table-form',
  imports: [CommonModule, TablePanelControlComponent, TablePaginatorFormComponent],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent {
  @Output() tablePaginatorEvent = new EventEmitter<number>()

  @Input({ required: true }) page!: number
  @Input({ required: true }) maxPage!: number

  onTablePaginatorEvent(page: number) {
    this.tablePaginatorEvent.emit(page)
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
