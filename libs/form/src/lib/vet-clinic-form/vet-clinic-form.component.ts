import { Component, Input } from '@angular/core'
import { map, Observable } from 'rxjs'

import { ClinicDomainDataModel, ClinicDomainFormDataModel } from '@vet-client/lib-domain'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { Validators } from '@angular/forms'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'
import { TableAddFormComponent } from '../table-form/table-add-form/table-add-form.component'
import { TableAddFormModel } from '../table-form/table-add-form/table-add-form.model'
import { TableDataFormComponent } from '../table-form/table-data-form/table-data-form.component'

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

  tableAddFormCallback(
    model: ClinicDomainDataModel,
    self: TableAddFormComponent<ClinicDomainDataModel>,
  ): Observable<TableAddFormModel> {
    const token = self.cookie.getToken()
    return self.httpPost.clinicCreatePost({ token, ...model }).pipe(
      map((data) => {
        const { success, errors } = data
        if (success) return { success, message: 'Clinic was added correctly!' }
        else return { success, message: errors[0] }
      }),
    )
  }

  tableDataFormCallback(self: TableDataFormComponent<ClinicDomainDataModel>): Observable<ClinicDomainDataModel[]> {
    const token = self.cookie.getToken()
    return self.httpPost.clinicReadPost({ token }).pipe(
      map(data => data.clinics),
    )
  }

  tableDataRemoveCallback(ids: number[], self: TableDataFormComponent<ClinicDomainDataModel>): void {
    const token = self.cookie.getToken()
    self.httpPost.clinicDeletePost({ token, ids }).subscribe()
  }
}
