import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'

import { BaseFormComponent, BaseFormService, ControlButtonBuilder } from '@vet-client/lib-base-form'
import { TableCardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableFormModel } from '../model/table-form.model'
import { TableFormRowModel } from '../model/table-form-rows.model'

@Component({
  selector: 'lib-table-edit-form',
  imports: [TableCardControlComponent, BaseFormComponent],
  templateUrl: './table-edit-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableEditFormComponent<TData>
  extends BaseFormService<TableFormModel, TData>
  implements OnInit {
  @Output() updateEvent = new EventEmitter<TData>()

  @Input({ required: true }) formModel!: TableFormModel
  @Input({ required: true }) editSuccess!: string
  @Input({ required: true }) editError!: string
  @Input({ required: true }) selectedClinic!: TableFormRowModel<TData>

  constructor(private readonly controlButton: ControlButtonBuilder) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      ...this.formModel,
      create: this.controlButton
        .buildBase('edit')
        .buildText('Edit')
        .buildColor('primary')
        .build(),
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.formGroup.patchValue(this.selectedClinic.domain as any)
  }

  override onSubmit(data: TData) {
    this.updateEvent.emit({
      ...this.selectedClinic.domain,
      ...data,
    })
  }
}
