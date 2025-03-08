import { Component } from '@angular/core'
import { Validators } from '@angular/forms'

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
import { CookieService } from '@vet-client/lib-system'

@Component({
  selector: 'lib-vet-clinic-form',
  imports: [TableFormComponent],
  templateUrl: './vet-clinic-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicFormComponent {
  readonly formModel: TableFormModel<keyof ClinicDomainFormDataModel> = {
    name: BaseFormBuilder.buildInputText('Name', [Validators.required, Validators.maxLength(255)], true),
  }

  readonly headers: TableFormHeadersModel = ['Name']

  readonly rows: TableFormRowsModel<keyof ClinicDomainFormDataModel> = []

  constructor(
    private readonly cookie: CookieService,
    private readonly httpPost: HttpPostAppService,
  ) {
  }

  onTableAddFormEvent(data: ClinicDomainDataModel) {
    const token = this.cookie.getToken()
    this.httpPost.clinicCreatePost({ token, data }).subscribe((res) => {
      console.log(res.success)
    })
  }
}
