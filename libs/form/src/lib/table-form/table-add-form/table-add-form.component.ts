import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { TableCardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableFormModel } from '../model/table-form.model'

@Component({
  selector: 'lib-table-add-form',
  imports: [TableCardControlComponent, BaseFormComponent],
  templateUrl: './table-add-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableAddFormComponent<T> extends BaseFormService<TableFormModel, T> implements OnInit {
  @Output() event = new EventEmitter<T>()

  @Input({ required: true }) formModel!: TableFormModel

  constructor(private readonly builder: BaseFormBuilder) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      ...this.formModel,
      add: this.builder.buildButtonText('add', 'Add', 'primary', true),
    })
  }

  override onSubmit(model: T) {
    this.event.emit(model)
  }
}
