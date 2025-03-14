import { Component, OnDestroy, OnInit } from '@angular/core'
import { skip, Subscription } from 'rxjs'
import { Store } from '@ngrx/store'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  clinicDomainDataMaxPageAction,
  clinicDomainDataPageAction,
  ClinicDomainDataReadNotification,
  ClinicDomainDataType,
} from '@vet-client/lib-store'
import { ActivatedRoute } from '@angular/router'
import { TableFormComponent } from '../table-form/table-form.component'

@Component({
  selector: 'lib-vet-clinic-form',
  imports: [TableFormComponent],
  templateUrl: './vet-clinic-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicFormComponent implements OnInit, OnDestroy {
  private readonly sub: Subscription

  page!: number
  maxPage!: number

  constructor(
    private readonly route: ActivatedRoute,
    private readonly clinicDomainDataReadNotification: ClinicDomainDataReadNotification,
    private readonly store: Store<ClinicDomainDataType>,
  ) {
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.sub.add(this.route.paramMap.subscribe((params) => {
      const page = Number(params.get('page'))
      if (page) {
        this.clinicDomainDataReadNotification.runNotification()
        this.store.dispatch(clinicDomainDataPageAction({ page }))
        this.store.dispatch(clinicDomainDataMaxPageAction())
        this.sub.add(this.store.select('clinicDomainData').pipe(skip(1)).subscribe((clinicDomainData) => {
          this.page = clinicDomainData.page
          this.maxPage = clinicDomainData.maxPage
        }))
      }
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  onTablePaginatorEvent(page: number) {
    this.store.dispatch(clinicDomainDataPageAction({ page }))
  }

  // private readonly sub = new Subscription()
  //
  // formModel!: TableFormModel
  //
  // clinics!: TableFormRowsModel<ClinicDomainDataModel['data']>
  //
  // constructor(
  //   private readonly store: Store<ClinicDomainDataType>,
  //   private readonly router: Router,
  //   private readonly clinicDomainDataCreateNotification: ClinicDomainDataCreateNotification,
  //   private readonly clinicDomainDataReadNotification: ClinicDomainDataReadNotification,
  //   private readonly clinicDomainDataDeleteNotification: ClinicDomainDataDeleteNotification,
  //   private readonly storeClinicDomainForm: Store<ClinicDomainFormType>,
  //   private readonly storeClinicResponseData: Store<ClinicDomainResponseType>,
  // ) {}
  //
  // ngOnInit() {
  //   this.clinicDomainDataReadNotification.runNotification()
  //   this.sub.add(this.storeClinicDomainForm.select('clinicDomainForm').subscribe((form) => {
  //     this.formModel = { ...form }
  //   }))
  //   this.sub.add(this.store.select('clinicDomainData').subscribe((data) => {
  //     this.router.navigate(['dashboard/vet/clinic/' + data.page])
  //   }))
  // }
  //
  // ngOnDestroy() {
  //   this.sub.unsubscribe()
  // }
  //
  // selectRows() {
  //   return this.store.select('clinicDomainData').pipe(
  //     map((data) => {
  //       const pageFrom = (data.page - 1) * NUMBER_OF_ROWS_PER_PAGE
  //       const pageTo = pageFrom + NUMBER_OF_ROWS_PER_PAGE
  //       return data.clinics.filter((_, index) => index >= pageFrom && index < pageTo)
  //     }),
  //   )
  // }
  //
  // selectCreateResponse(): Observable<ClinicDomainResponseModel> {
  //   return this.storeClinicResponseData.select('clinicDomainResponse').pipe(
  //     map(data => data.createResponse),
  //   )
  // }
  //
  // selectTab(): Observable<string> {
  //   return this.store.select('clinicDomainData').pipe(
  //     map(data => data.tab),
  //   )
  // }
  //
  // dispatchTab(tab: string) {
  //   this.store.dispatch(setClinicDomainTab({ tab }))
  // }
  //
  // dispatchIsSelected(id: number, isSelected: boolean) {
  //   return this.store.dispatch(setClinicDomainSelection({ id, isSelected }))
  // }
  //
  // dispatchCreate(clinic: ClinicDomainDataModel) {
  //   this.clinicDomainDataCreateNotification.runNotification(clinic)
  // }
  //
  // dispatchDelete(id: number) {
  //   this.clinicDomainDataDeleteNotification.runNotification([id])
  // }
  //
  // dispatchEdit(id: number) {
  //   this.store.dispatch(setClinicDomainSelectedClinic({ selectedPage: id }))
  //   this.store.dispatch(setClinicDomainTab({ tab: 'update' }))
  // }
  //
  // // I am here
  // selectPage() {
  //   return this.store.select('clinicDomainData').pipe(
  //     map(data => data.page),
  //   )
  // }
  //
  // selectMaxPage() {
  //   return this.store.select('clinicDomainData').pipe(
  //     map(data => data.maxPage),
  //   )
  // }
  //
  // dispatchPage(page: number) {
  //   this.store.dispatch(clinicDomainDataPageAction({ page }))
  // }
  //
  // dispatchMaxPage() {
  //   this.store.dispatch(clinicDomainDataMaxPageAction())
  // }
}
