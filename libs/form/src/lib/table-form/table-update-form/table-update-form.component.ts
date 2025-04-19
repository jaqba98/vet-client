import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective, CrudNotification } from '@vet-client/lib-utils'
import { DeleteDomainModel } from '@vet-client/lib-domain'
import { BaseTableFormStoreModel } from '@vet-client/lib-store'
import { TableFormModel } from '../model/table-form.model'
import { TableFormStoreModel } from '../model/table-form-store.model'
import { TableCardControlComponent } from '../../table-card-control/table-card-control.component'

@Component({
  selector: 'lib-table-update-form',
  imports: [TableCardControlComponent, BaseFormComponent],
  templateUrl: './table-update-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableUpdateFormComponent<TFormModel, TDomainModel, TMetadata>
  extends BaseFormService<TableFormModel<TFormModel>, TDomainModel>
  implements OnInit, OnDestroy {
  @Input({ required: true }) formModel!: TableFormModel<TFormModel>
  @Input({ required: true }) crud!: CrudNotification<TDomainModel, DeleteDomainModel>
  @Input({ required: true }) store!: Store<TableFormStoreModel>
  @Input({ required: true }) select!: string

  ngOnInit() {
    this.onInit('Update', this.crud.responseUpdate$)
    this.initBaseForm(this.formModel)
    this.sub.add(this.store.select(this.select).subscribe((data: BaseTableFormStoreModel<TDomainModel, TMetadata>) => {
      if (data.selectedRow?.data) {
        this.setControlValues(Object.entries(data.selectedRow.data))
      }
    }))
  }

  ngOnDestroy() {
    this.onDestroy()
  }

  override onSubmit(domain: TDomainModel) {
    this.crud.runNotificationUpdate(domain)
  }
}
