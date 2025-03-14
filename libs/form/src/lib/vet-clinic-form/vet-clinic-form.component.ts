// done
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, Observable, Subscription } from 'rxjs'
import { Router } from '@angular/router'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  ClinicDomainDataCreateNotification,
  ClinicDomainDataDeleteNotification, ClinicDomainDataReadNotification,
  ClinicDomainDataType,
  ClinicDomainFormType, ClinicDomainResponseType,
  setClinicDomainPageData,
  setClinicDomainSelection,
} from '@vet-client/lib-store'
import { ClinicDomainDataModel, ClinicDomainResponseModel } from '@vet-client/lib-domain'
import { NUMBER_OF_ROWS_PER_PAGE } from '@vet-client/lib-const'
import { TableFormComponent } from '../table-form/table-form.component'
import { VetClinicFormStore } from './vet-clinic-form.store'
import { TableFormModel } from '../table-form/model/table-form.model'
import { TableFormRowsModel } from '../table-form/model/table-form-rows.model'

@Component({
  selector: 'lib-vet-clinic-form',
  imports: [TableFormComponent],
  providers: [VetClinicFormStore],
  templateUrl: './vet-clinic-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicFormComponent implements OnInit, OnDestroy {
  private readonly sub = new Subscription()

  formModel!: TableFormModel

  clinics!: TableFormRowsModel<ClinicDomainDataModel['data']>

  constructor(
    public readonly store: VetClinicFormStore,
    private readonly router: Router,
    private readonly clinicDomainDataCreateNotification: ClinicDomainDataCreateNotification,
    private readonly clinicDomainDataReadNotification: ClinicDomainDataReadNotification,
    private readonly clinicDomainDataDeleteNotification: ClinicDomainDataDeleteNotification,
    private readonly storeClinicDomainForm: Store<ClinicDomainFormType>,
    private readonly storeClinicDomainData: Store<ClinicDomainDataType>,
    private readonly storeClinicResponseData: Store<ClinicDomainResponseType>,
  ) {}

  ngOnInit() {
    this.clinicDomainDataReadNotification.runNotification()
    this.sub.add(this.storeClinicDomainForm.select('clinicDomainForm').subscribe((form) => {
      this.formModel = { ...form }
    }))
    this.sub.add(this.storeClinicDomainData.select('clinicDomainData').subscribe((data) => {
      this.router.navigate(['dashboard/vet/clinic/' + data.page])
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  selectPage() {
    return this.storeClinicDomainData.select('clinicDomainData').pipe(
      map(data => ({ page: data.page, maxPage: data.maxPage })),
    )
  }

  selectRows() {
    return this.storeClinicDomainData.select('clinicDomainData').pipe(
      map((data) => {
        const pageFrom = (data.page - 1) * NUMBER_OF_ROWS_PER_PAGE
        const pageTo = pageFrom + NUMBER_OF_ROWS_PER_PAGE
        return data.clinics.filter((_, index) => index >= pageFrom && index < pageTo)
      }),
    )
  }

  selectCreateResponse(): Observable<ClinicDomainResponseModel> {
    return this.storeClinicResponseData.select('clinicDomainResponse').pipe(
      map(data => data.createResponse),
    )
  }

  dispatchPage(page: number) {
    return this.storeClinicDomainData.dispatch(setClinicDomainPageData({ page }))
  }

  dispatchIsSelected(id: number, isSelected: boolean) {
    return this.storeClinicDomainData.dispatch(setClinicDomainSelection({ id, isSelected }))
  }

  dispatchCreate(clinic: ClinicDomainDataModel) {
    this.clinicDomainDataCreateNotification.runNotification(clinic)
  }

  dispatchDelete(id: number) {
    this.clinicDomainDataDeleteNotification.runNotification([id])
  }

  dispatchEdit(id: number) {
    console.log(id)
  }
}
