import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription } from 'rxjs'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { TableCardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableFormModel } from '../model/table-form.model'
import { BaseTableFormStore } from '../store/base-table-form.store'
import { ClinicDomainDataModel, ClinicDomainResponseModel } from '@vet-client/lib-domain'

@Component({
  selector: 'lib-table-add-form',
  imports: [TableCardControlComponent, BaseFormComponent],
  templateUrl: './table-add-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableAddFormComponent<TData>
  extends BaseFormService<TableFormModel, TData>
  implements OnInit, OnDestroy {
  @Input({ required: true }) selectCreateResponse!: () => Observable<ClinicDomainResponseModel>
  @Input({ required: true }) dispatchCreate!: (clinic: ClinicDomainDataModel) => void

  @Input({ required: true }) store!: BaseTableFormStore<TData>

  @Input({ required: true }) formModel!: TableFormModel

  private readonly sub: Subscription

  constructor() {
    super()
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.initBaseForm({
      ...this.formModel,
      add: BaseFormBuilder.buildButtonText('add', 'Add', 'primary', true),
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
