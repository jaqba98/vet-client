import { Component, Input, OnDestroy, OnInit } from '@angular/core'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { TableCardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective, CrudNotification } from '@vet-client/lib-utils'
import { DeleteDomainModel } from '@vet-client/lib-domain'
import { TableFormModel } from '../model/table-form.model'

@Component({
  selector: 'lib-table-create-form',
  imports: [TableCardControlComponent, BaseFormComponent],
  templateUrl: './table-create-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableCreateFormComponent<TFormModel, TDomainModel>
  extends BaseFormService<TableFormModel<TFormModel>, TDomainModel>
  implements OnInit, OnDestroy {
  @Input({ required: true }) formModel!: TableFormModel<TFormModel>
  @Input({ required: true }) crud!: CrudNotification<TDomainModel, DeleteDomainModel>

  ngOnInit() {
    this.onInit('Create', this.crud.responseCreate$)
    this.initBaseForm(this.formModel)
  }

  ngOnDestroy() {
    this.onDestroy()
  }

  override onSubmit(domain: TDomainModel) {
    this.crud.runNotificationCreate(domain)
  }
}
