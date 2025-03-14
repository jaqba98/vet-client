import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription } from 'rxjs'

import { BaseFormComponent, BaseFormService, ControlButtonBuilder } from '@vet-client/lib-base-form'
import { TableCardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableFormModel } from '../model/table-form.model'
import { TableFormRowModel } from '../model/table-form-rows.model'
import { TableFormResponseModel } from '../model/table-form-response.model'

@Component({
  selector: 'lib-table-create-form',
  imports: [TableCardControlComponent, BaseFormComponent],
  templateUrl: './table-create-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableCreateFormComponent<TData>
  extends BaseFormService<TableFormModel, TData>
  implements OnInit, OnDestroy {
  @Input({ required: true }) selectCreateResponse!: () => Observable<TableFormResponseModel>
  @Input({ required: true }) dispatchCreate!: (clinic: TableFormRowModel<TData>) => void

  @Input({ required: true }) formModel!: TableFormModel

  private readonly sub: Subscription

  constructor(private readonly controlButton: ControlButtonBuilder) {
    super()
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.initBaseForm({
      ...this.formModel,
      create: this.controlButton
        .buildBase('create')
        .buildText('Create')
        .buildColor('primary')
        .build(),
    })
    this.sub.add(this.selectCreateResponse().subscribe((response) => {
      this.success = ''
      this.error = ''
      if (response.success) {
        this.success = response.message
      }
      else {
        this.error = response.message
      }
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
