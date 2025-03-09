import { Component, Input, OnInit } from '@angular/core'

import { TableCardControlComponent } from '@vet-client/lib-control'
import {
  BaseFormBuilder,
  BaseFormComponent,
  BaseFormService,
} from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableFormModel } from '../model/table-form.model'
import { CookieService } from '@vet-client/lib-system'
import { HttpPostAppService } from '@vet-client/lib-http'

@Component({
  selector: 'lib-table-add-form',
  imports: [TableCardControlComponent, BaseFormComponent],
  templateUrl: './table-add-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableAddFormComponent<TEvent>
  extends BaseFormService<TableFormModel, TEvent>
  implements OnInit {
  @Input({ required: true }) formModel!: TableFormModel

  @Input({ required: true }) callback!: (model: TEvent, self: BaseFormService<TableFormModel, TEvent>) => void

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

  override onSubmit(model: TEvent) {
    this.callback(model, this)
  }
}
