import { Component, Input, OnInit } from '@angular/core'

import { BaseFormBuilder, BaseFormComponent, BaseFormService, ControlType } from '@vet-client/lib-base-form'
import { TableCardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { TableFormModel } from '../model/table-form.model'
import { BaseTableFormStore } from '../store/base-table-form.store'
import { Subscription } from 'rxjs'

@Component({
  selector: 'lib-table-edit-form',
  imports: [TableCardControlComponent, BaseFormComponent],
  templateUrl: './table-edit-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableEditFormComponent<TData>
  extends BaseFormService<TableFormModel, TData>
  implements OnInit {
  @Input({ required: true }) store!: BaseTableFormStore<TData>

  @Input({ required: true }) formModel!: TableFormModel

  private sub!: Subscription

  constructor(private objectType: ObjectTypeUtils) {
    super()
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.sub.add(
      this.store.row$.subscribe((row) => {
        const newFormModel: Record<string, ControlType> = {}
        for (const [key, value] of Object.entries(this.formModel)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const defaultValue: any = this.objectType.getPropertyByDynamicKey(row.data, key)
          newFormModel[key] = { ...value, defaultValue: defaultValue }
        }
        this.initBaseForm({
          ...newFormModel,
          edit: BaseFormBuilder.buildButtonText('edit', 'Edit', 'primary', true),
        })
      }),
    )
  }
}
