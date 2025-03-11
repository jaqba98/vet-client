import { Component, Input, OnInit } from '@angular/core'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { TableCardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableFormModel } from '../model/table-form.model'
import { CookieService } from '@vet-client/lib-system'
import { HttpPostAppService } from '@vet-client/lib-http'
import { BaseTableFormStore } from '../store/base-table-form.store'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'lib-table-add-form',
  imports: [TableCardControlComponent, BaseFormComponent, AsyncPipe],
  templateUrl: './table-add-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableAddFormComponent<TData>
  extends BaseFormService<TableFormModel, TData>
  implements OnInit {
  @Input({ required: true }) store!: BaseTableFormStore<TData>

  @Input({ required: true }) formModel!: TableFormModel

  constructor(
    public readonly cookie: CookieService,
    public readonly httpPost: HttpPostAppService,
  ) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      ...this.formModel,
      add: BaseFormBuilder.buildButtonText('add', 'Add', 'primary', true),
    })
  }

  override onSubmit(model: TData) {
    this.store.create(model)
  }
}
