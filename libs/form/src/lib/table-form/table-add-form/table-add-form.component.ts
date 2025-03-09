import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { TableCardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableFormModel } from '../model/table-form.model'
import { TableAddFormModel } from './table-add-form.model'
import { CookieService } from '@vet-client/lib-system'
import { HttpPostAppService } from '@vet-client/lib-http'

@Component({
  selector: 'lib-table-add-form',
  imports: [TableCardControlComponent, BaseFormComponent],
  templateUrl: './table-add-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableAddFormComponent<TData>
  extends BaseFormService<TableFormModel, TData>
  implements OnInit {
  @Input({ required: true }) formModel!: TableFormModel
  @Input({ required: true }) callback!: (data: TData, self: TableAddFormComponent<TData>) => Observable<TableAddFormModel>

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
    this.callback(model, this).subscribe((data) => {
      const { success, message } = data
      this.resetBaseForm()
      if (success) this.success = message
      else this.error = message
    })
  }
}
