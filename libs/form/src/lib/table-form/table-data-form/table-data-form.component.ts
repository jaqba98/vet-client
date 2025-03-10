import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { BaseComponentDirective, ObjectTypeUtils } from '@vet-client/lib-utils'
import { CookieService } from '@vet-client/lib-system'
import { HttpPostAppService } from '@vet-client/lib-http'
import { TableFormModel } from '../model/table-form.model'
import { ButtonControlComponent, ButtonControlModel } from '@vet-client/lib-control'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { BaseResponseModel } from '../../../../../http/src/lib/model/base/base-response.model'

@Component({
  selector: 'lib-table-data-form',
  imports: [CommonModule, ButtonControlComponent],
  templateUrl: './table-data-form.component.html',
  styleUrl: './table-data-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableDataFormComponent<TData extends object> implements OnInit {
  @Input({ required: true }) formModel!: TableFormModel
  @Input({ required: true }) callback!: (self: TableDataFormComponent<TData>) => Observable<TData[]>
  @Input({ required: true }) removeCallback!: (ids: number[], self: TableDataFormComponent<TData>) => Observable<BaseResponseModel>

  rows!: TData[]

  readonly removeButtonModel: ButtonControlModel = {
    id: 'remove',
    value: {
      type: 'icon',
      icon: {
        icon: faTrash,
        color: 'light-primary',
        fontSize: '1rem',
      },
    },
    color: 'error',
    fullWidth: false,
  }

  constructor(
    public readonly cookie: CookieService,
    public readonly httpPost: HttpPostAppService,
    private readonly objectType: ObjectTypeUtils,
  ) {}

  ngOnInit() {
    this.callback(this).subscribe(data => this.rows = data)
  }

  getHeaders() {
    return Object.keys(this.formModel)
  }

  getRowId(row: TData) {
    return Number(this.objectType.getPropertyByDynamicKey(row, 'id'))
  }

  getColumn(row: TData, header: string) {
    return this.objectType.getPropertyByDynamicKey(row, header)
  }

  async onRemoveButtonEvent(id: number) {
    this.removeCallback([id], this).subscribe(() => {
      this.callback(this).subscribe(data => (this.rows = data))
    })
  }
}
