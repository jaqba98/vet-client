import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ClinicDomainDataModel, ClinicDomainFormDataModel } from '@vet-client/lib-domain'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { HttpPostAppService } from '@vet-client/lib-http'
import { TableFormComponent } from '../table-form/table-form.component'
import {
  TableFormHeadersModel,
  TableFormModel,
  TableFormRowsModel,
} from '../table-form/model/table-form.model'

@Component({
  selector: 'lib-vet-clinic-form',
  imports: [TableFormComponent],
  templateUrl: './vet-clinic-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicFormComponent {
  readonly formModel!: TableFormModel<keyof ClinicDomainFormDataModel>

  readonly headers: TableFormHeadersModel

  readonly rows: TableFormRowsModel<keyof ClinicDomainFormDataModel>

  constructor(
    private readonly builder: BaseFormBuilder,
    private readonly httpPost: HttpPostAppService,
  ) {
    this.formModel = {
      name: this.builder.buildInputText('Name', [], true),
    }
    this.headers = ['Name']
    this.rows = []
  }

  onTableAddFormEvent(data: ClinicDomainDataModel) {
    this.httpPost.clinicCreatePost({ token: '123', data }).subscribe((res) => {
      console.log(res)
    })
  }
}
