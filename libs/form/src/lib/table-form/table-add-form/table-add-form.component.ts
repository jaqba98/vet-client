import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { CardControlComponent } from '@vet-client/lib-control'
import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableDataModel, TableFormModel } from '../model/table-form.model'

@Component({
  selector: 'lib-table-add-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './table-add-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableAddFormComponent extends BaseFormService<TableFormModel, TableDataModel> implements OnInit {
  @Output() event = new EventEmitter<TableDataModel>()

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

  override onSubmit(model: TableDataModel) {
    this.event.emit(model)
  }
}
