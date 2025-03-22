import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'

import { BaseFormComponent, BaseFormService, BaseFormBuilder } from '@vet-client/lib-base-form'
import { TableCardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableFormModel } from '../model/table-form.model'

@Component({
  selector: 'lib-table-create-form',
  imports: [TableCardControlComponent, BaseFormComponent],
  templateUrl: './table-create-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableCreateFormComponent<TData>
  extends BaseFormService<TableFormModel, TData>
  implements OnInit {
  @Output() createEvent = new EventEmitter<TData>()

  @Input({ required: true }) formModel!: TableFormModel
  @Input({ required: true }) createSuccess!: string
  @Input({ required: true }) createError!: string

  constructor(private readonly controlButton: BaseFormBuilder) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      ...this.formModel,
      // create: this.controlButton
      //   .buildBase('create')
      //   .buildText('Create')
      //   .buildColor('primary')
      //   .build(),
    })
  }

  override onSubmit(data: TData) {
    this.createEvent.emit(data)
  }
}
