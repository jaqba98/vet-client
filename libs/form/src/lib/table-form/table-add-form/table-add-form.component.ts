import { Component, Input, OnInit } from '@angular/core'
import { AsyncPipe } from '@angular/common'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { TableCardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableFormModel } from '../model/table-form.model'
import { BaseTableFormStore } from '../store/base-table-form.store'
import { ClinicDomainDataModel } from '@vet-client/lib-domain'

@Component({
  selector: 'lib-table-add-form',
  imports: [TableCardControlComponent, BaseFormComponent, AsyncPipe],
  templateUrl: './table-add-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableAddFormComponent<TData>
  extends BaseFormService<TableFormModel, TData>
  implements OnInit {
  @Input({ required: true }) dispatchCreate!: (clinic: ClinicDomainDataModel) => void

  @Input({ required: true }) store!: BaseTableFormStore<TData>

  @Input({ required: true }) formModel!: TableFormModel

  ngOnInit() {
    this.initBaseForm({
      ...this.formModel,
      add: BaseFormBuilder.buildButtonText('add', 'Add', 'primary', true),
    })
  }
}
