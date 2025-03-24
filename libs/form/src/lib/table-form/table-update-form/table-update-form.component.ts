import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { TableCardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective, CrudNotification } from '@vet-client/lib-utils'
import { DeleteDomainModel } from '@vet-client/lib-domain'
import { ClinicTableFormType } from '@vet-client/lib-store'
import { TableFormModel } from '../model/table-form.model'

@Component({
  selector: 'lib-table-update-form',
  imports: [TableCardControlComponent, BaseFormComponent],
  templateUrl: './table-update-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableUpdateFormComponent<TFormModel, TDomainModel>
  extends BaseFormService<TableFormModel<TFormModel>, TDomainModel>
  implements OnInit, OnDestroy {
  @Input({ required: true }) formModel!: TableFormModel<TFormModel>
  @Input({ required: true }) crud!: CrudNotification<TDomainModel, DeleteDomainModel>
  @Input({ required: true }) store!: Store<ClinicTableFormType>

  ngOnInit() {
    this.onInit('Update', this.crud.responseUpdate$)
    this.initBaseForm(this.formModel)
    this.sub.add(this.store.select('clinicTableForm').subscribe((data) => {
      if (data.selectedRow) {
        this.setControlValues(Object.entries(data.selectedRow.row))
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
