import { Injectable } from '@angular/core'

import { ClinicDomainDataModel } from '@vet-client/lib-domain'
import { ClinicDomainDataStoreModel } from '@vet-client/lib-store'
import { BaseTableFormStore } from '../table-form/store/base-table-form.store'

@Injectable()
export class VetClinicFormStore extends BaseTableFormStore<ClinicDomainDataModel['data']> {
  data!: ClinicDomainDataStoreModel

  override read() {
    this.setRows(this.data.clinics)
  }

  // constructor(
  //   protected override cookie: CookieService,
  //   protected override httpPost: HttpPostAppService,
  //   protected override router: Router,
  // ) {
  //   super(cookie, httpPost, router, 'dashboard/vet/clinic/')
  // }
  //
  // override create(row: ClinicDomainDataModel) {
  //   const token = this.cookie.getToken()
  //   this.httpPost.clinicCreatePost({ token, ...row }).subscribe((res) => {
  //     this.setCreateSuccess('')
  //     this.setCreateError('')
  //     if (res.success) {
  //       this.setCreateSuccess('Clinic was added correctly!')
  //     }
  //     else {
  //       this.setCreateError(res.errors[0])
  //     }
  //   })
  // }
  //
  // override edit(row: ClinicDomainDataModel) {
  //   const token = this.cookie.getToken()
  //   this.httpPost.clinicUpdatePost({ token, ...row }).subscribe((res) => {
  //     this.setEditSuccess('')
  //     this.setEditError('')
  //     if (res.success) {
  //       this.setEditSuccess('Clinic was updated correctly!')
  //     }
  //     else {
  //       this.setEditError(res.errors[0])
  //     }
  //   })
  // }
  //
  // override delete(ids: number[]) {
  //   const token = this.cookie.getToken()
  //   this.httpPost.clinicDeletePost({ token, ids }).subscribe(() => {
  //     const newRows = this.rows
  //       .getValue()
  //       .filter(row => !ids.includes(row.id))
  //     this.setRows(newRows)
  //   })
  // }
}
