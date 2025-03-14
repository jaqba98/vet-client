// done
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, Observable, Subscription } from 'rxjs'
import { Router } from '@angular/router'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  ClinicDomainDataCreateNotification,
  ClinicDomainDataDeleteNotification,
  clinicDomainDataPageAction,
  ClinicDomainDataReadNotification,
  ClinicDomainDataType,
  ClinicDomainFormType,
  ClinicDomainResponseType,
  setClinicDomainSelectedClinic,
  setClinicDomainSelection,
  setClinicDomainTab,
} from '@vet-client/lib-store'
import { ClinicDomainDataModel, ClinicDomainResponseModel } from '@vet-client/lib-domain'
import { NUMBER_OF_ROWS_PER_PAGE } from '@vet-client/lib-const'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormModel } from '../table-form/model/table-form.model'
import { TableFormRowsModel } from '../table-form/model/table-form-rows.model'

@Component({
  selector: 'lib-vet-clinic-form',
  imports: [TableFormComponent],
  templateUrl: './vet-clinic-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicFormComponent implements OnInit, OnDestroy {
  private readonly sub = new Subscription()

  formModel!: TableFormModel

  clinics!: TableFormRowsModel<ClinicDomainDataModel['data']>

  constructor(
    private readonly store: Store<ClinicDomainDataType>,
    private readonly router: Router,
    private readonly clinicDomainDataCreateNotification: ClinicDomainDataCreateNotification,
    private readonly clinicDomainDataReadNotification: ClinicDomainDataReadNotification,
    private readonly clinicDomainDataDeleteNotification: ClinicDomainDataDeleteNotification,
    private readonly storeClinicDomainForm: Store<ClinicDomainFormType>,
    private readonly storeClinicResponseData: Store<ClinicDomainResponseType>,
  ) {}

  ngOnInit() {
    this.clinicDomainDataReadNotification.runNotification()
    this.sub.add(this.storeClinicDomainForm.select('clinicDomainForm').subscribe((form) => {
      this.formModel = { ...form }
    }))
    this.sub.add(this.store.select('clinicDomainData').subscribe((data) => {
      this.router.navigate(['dashboard/vet/clinic/' + data.page])
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  selectRows() {
    return this.store.select('clinicDomainData').pipe(
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

  selectTab(): Observable<string> {
    return this.store.select('clinicDomainData').pipe(
      map(data => data.tab),
    )
  }

  dispatchTab(tab: string) {
    this.store.dispatch(setClinicDomainTab({ tab }))
  }

  dispatchIsSelected(id: number, isSelected: boolean) {
    return this.store.dispatch(setClinicDomainSelection({ id, isSelected }))
  }

  dispatchCreate(clinic: ClinicDomainDataModel) {
    this.clinicDomainDataCreateNotification.runNotification(clinic)
  }

  dispatchDelete(id: number) {
    this.clinicDomainDataDeleteNotification.runNotification([id])
  }

  dispatchEdit(id: number) {
    this.store.dispatch(setClinicDomainSelectedClinic({ selectedPage: id }))
    this.store.dispatch(setClinicDomainTab({ tab: 'update' }))
  }

  // I am here
  selectPage() {
    return this.store.select('clinicDomainData').pipe(
      map(data => data.page),
    )
  }

  dispatchPage(page: number) {
    this.store.dispatch(clinicDomainDataPageAction({ page }))
  }
}
