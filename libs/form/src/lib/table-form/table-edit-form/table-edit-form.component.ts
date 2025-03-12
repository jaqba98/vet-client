import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { combineLatest, Subscription } from 'rxjs'

import {
  BaseFormBuilder,
  BaseFormComponent,
  BaseFormService,
  ControlType,
} from '@vet-client/lib-base-form'
import { TableCardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { TableFormModel } from '../model/table-form.model'
import { BaseTableFormStore } from '../store/base-table-form.store'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'lib-table-edit-form',
  imports: [TableCardControlComponent, BaseFormComponent, AsyncPipe],
  templateUrl: './table-edit-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableEditFormComponent<TData>
  extends BaseFormService<TableFormModel, TData>
  implements OnInit, OnDestroy {
  @Input({ required: true }) store!: BaseTableFormStore<TData>

  @Input({ required: true }) formModel!: TableFormModel

  private sub!: Subscription

  private id!: number

  constructor(private objectType: ObjectTypeUtils) {
    super()
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.sub.add(
      this.store.row$.subscribe((row) => {
        this.id = row.id
        const newFormModel: TableFormModel = {}
        for (const [key, value] of Object.entries(this.formModel)) {
          newFormModel[key] = <ControlType>{
            ...value,
            defaultValue: this.objectType.getPropertyByDynamicKey(row.data, key),
          }
        }
        this.initBaseForm({
          ...newFormModel,
          edit: BaseFormBuilder.buildButtonText('edit', 'Edit', 'primary', true),
        })
      }),
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  onEditEvent(row: TData) {
    this.store.edit(row)
    this.store.read()
    this.store.setEditRow(this.id)
    this.store.updateEditRow(this.id, row)
  }
}
