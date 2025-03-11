import { Injectable } from '@angular/core'
import { map } from 'rxjs'

import { ClinicDomainDataModel } from '@vet-client/lib-domain'
import { BaseTableFormStore } from '../table-form/store/base-table-form.store'
import { TableFormRowModel } from '../table-form/model/table-form-rows.model'
import { CookieService } from '@vet-client/lib-system'
import { HttpPostAppService } from '@vet-client/lib-http'
import { Router } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class VetClinicFormStore extends BaseTableFormStore<ClinicDomainDataModel> {
  constructor(
    protected override cookie: CookieService,
    protected override httpPost: HttpPostAppService,
    protected override router: Router,
  ) {
    super(cookie, httpPost, router, 'dashboard/vet/clinic/')
  }

  override create(row: ClinicDomainDataModel) {
    const token = this.cookie.getToken()
    this.httpPost.clinicCreatePost({ token, ...row }).subscribe((res) => {
      this.setCreateSuccess('')
      this.setCreateError('')
      if (res.success) {
        this.setCreateSuccess('Clinic was added correctly!')
      }
      else {
        this.setCreateError(res.errors[0])
      }
    })
  }

  override read() {
    const token = this.cookie.getToken()
    this.httpPost
      .clinicReadPost({ token })
      .pipe(
        map(res => res.clinics),
        map(clinics =>
          clinics.map(
            clinic =>
              <TableFormRowModel<ClinicDomainDataModel>>{
                id: clinic.id,
                isSelected: false,
                data: clinic,
              },
          ),
        ),
      )
      .subscribe((res) => {
        this.setRows(res)
      })
  }

  override delete(ids: number[]) {
    const token = this.cookie.getToken()
    this.httpPost.clinicDeletePost({ token, ids }).subscribe(() => {
      const newRows = this.rows
        .getValue()
        .filter(row => !ids.includes(row.id))
      this.setRows(newRows)
    })
  }
}
