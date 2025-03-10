import { Component } from '@angular/core'
import { map, Observable } from 'rxjs'
import { Validators } from '@angular/forms'

import { ClinicDomainDataModel, ClinicDomainFormDataModel } from '@vet-client/lib-domain'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { BaseResponseModel } from '@vet-client/lib-http'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel, TableFormRowsModel } from '../table-form/model/table-form.model'
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
    id: BaseFormBuilder.buildInputText('ID', [], false),
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

  tableDataFormCallback(self: TableDataFormComponent): Observable<TableFormRowsModel<ClinicDomainDataModel>> {
    const token = self.cookie.getToken()
    return self.httpPost.clinicReadPost({ token }).pipe(
      map(data => data.clinics.map(clinic => ({
        id: clinic.id,
        isSelected: false,
        data: clinic,
      }))),
    )
  }

  tableDataRemoveCallback(ids: number[], self: TableDataFormComponent): Observable<BaseResponseModel> {
    const token = self.cookie.getToken()
    return self.httpPost.clinicDeletePost({ token, ids })
  }
}
