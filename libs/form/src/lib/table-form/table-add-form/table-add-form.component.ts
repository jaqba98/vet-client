import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { CardControlComponent } from '@vet-client/lib-control'
import { BaseFormBuilder, BaseFormComponent, BaseFormModel, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-table-add-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './table-add-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableAddFormComponent<TKey extends string, TFormModel extends BaseFormModel<TKey>, TModel>
  extends BaseFormService<BaseFormModel<string>, TModel>
  implements OnInit {
  @Output() event = new EventEmitter<TModel>()

  @Input({ required: true }) formModel!: TFormModel

  constructor(private readonly builder: BaseFormBuilder) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      ...this.formModel,
      add: this.builder.buildButtonText('add', 'Add', 'primary', true),
    })
  }

  override onSubmit(model: TModel) {
    this.event.emit(model)
  }
}
