import { Component, Input, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

import {
  BaseFormComponent,
  BaseFormService,
} from '@vet-client/lib-base-form'
import { TableCardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { TableFormModel } from '../model/table-form.model'
import { AsyncPipe } from '@angular/common'
import { TableTabEnum } from '../enum/table-tab.enum'

@Component({
  selector: 'lib-table-edit-form',
  imports: [TableCardControlComponent, BaseFormComponent, AsyncPipe],
  templateUrl: './table-edit-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableEditFormComponent<TData>
  extends BaseFormService<TableFormModel, TData>
  implements OnDestroy {
  @Input({ required: true }) dispatchTab!: (tab: string) => void

  @Input({ required: true }) formModel!: TableFormModel

  private sub!: Subscription

  private id!: number

  constructor(private objectType: ObjectTypeUtils) {
    super()
    this.sub = new Subscription()
  }

  // ngOnInit() {
  //   this.sub.add(
  //     this.store.row$.subscribe((row) => {
  //       this.id = row.id
  //       const newFormModel: TableFormModel = {}
  //       for (const [key, value] of Object.entries(this.formModel)) {
  //         newFormModel[key] = <ControlType>{
  //           ...value,
  //           defaultValue: this.objectType.getPropertyByDynamicKey(row.data, key),
  //         }
  //       }
  //       this.initBaseForm({
  //         ...newFormModel,
  //         edit: BaseFormBuilder.buildButtonText('edit', 'Edit', 'primary', true),
  //       })
  //     }),
  //   )
  // }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  onEditEvent(row: TData) {
    this.dispatchTab(TableTabEnum.edit)
  }
}
