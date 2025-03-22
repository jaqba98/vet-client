import { Component, OnDestroy, OnInit } from '@angular/core'
import { map, of, skip, Subscription, take } from 'rxjs'
import { Store } from '@ngrx/store'
import { ActivatedRoute, Router } from '@angular/router'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  ClinicDomainDataCreateNotification,
  ClinicDomainDataDeleteNotification,
  clinicDomainDataMaxPageAction,
  clinicDomainDataPageAction,
  ClinicDomainDataReadNotification,
  clinicDomainDataSelectAction,
  clinicDomainDataTabAction,
  ClinicDomainDataType,
  ClinicDomainResponseType,
  selectClinicDomainDataMaxPage,
  selectClinicDomainDataPage,
  selectClinicDomainDataTab,
  ClinicDomainDataUpdateNotification,
} from '@vet-client/lib-store'
import { NUMBER_OF_ROWS_PER_PAGE } from '@vet-client/lib-const'
import { TableFormComponent } from '../table-form/table-form.component'
import { TableFormTabEnum } from '../table-form/enum/table-form-tab.enum'
import { TableFormModel } from '../table-form/model/table-form.model'
import { ClinicFormModel, ClinicTableModel } from '@vet-client/lib-domain'
import { BaseFormBuilder } from '@vet-client/lib-base-form'

@Component({
  selector: 'lib-vet-clinic-form',
  imports: [TableFormComponent],
  templateUrl: './vet-clinic-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicFormComponent implements OnInit, OnDestroy {
  private readonly sub: Subscription

  formModel!: TableFormModel<keyof ClinicFormModel>
  page = 1
  maxPage = 1
  tab = TableFormTabEnum.table
  clinics: ClinicTableModel[] = []
  allClinics: ClinicTableModel[] = []
  createSuccess = ''
  createError = ''
  editSuccess = ''
  editError = ''
  allSelected = false
  selectedClinic!: ClinicTableModel

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly clinicDomainDataCreateNotification: ClinicDomainDataCreateNotification,
    private readonly clinicDomainDataReadNotification: ClinicDomainDataReadNotification,
    private readonly clinicDomainDataDeleteNotification: ClinicDomainDataDeleteNotification,
    private readonly clinicDomainDataUpdateNotification: ClinicDomainDataUpdateNotification,
    private readonly dataStore: Store<ClinicDomainDataType>,
    private readonly responseStore: Store<ClinicDomainResponseType>,
    private baseForm: BaseFormBuilder,
  ) {
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.formModel = {
      name: this.baseForm.buildInput('text', 'Name').build(),
      street: this.baseForm.buildInput('text', 'Street').build(),
      buildingNumber: this.baseForm.buildInput('text', 'Building Number').build(),
      apartmentNumber: this.baseForm.buildInput('text', 'Apartment Number').build(),
      postalCode: this.baseForm.buildInput('text', 'Postal Code').build(),
      city: this.baseForm.buildInput('text', 'City').build(),
      province: this.baseForm.buildInput('text', 'Province').build(),
      country: this.baseForm.buildInput('text', 'Country').build(),
      email: this.baseForm.buildInput('text', 'Email').build(),
      phoneNumber: this.baseForm.buildInput('text', 'Phone number').build(),
    }

    this.sub.add(this.route.paramMap.subscribe(async (paramMap) => {
      const page = Number(paramMap.get('page'))
      if (!page) {
        await this.router.navigate(['dashboard/vet/clinic/1'])
        this.dataStore.dispatch(clinicDomainDataPageAction({ page: 1 }))
      }
      else {
        this.dataStore.dispatch(clinicDomainDataPageAction({ page }))
      }
    }))
    this.sub.add(this.responseStore.select('clinicDomainResponse').pipe(skip(1)).subscribe((response) => {
      this.createSuccess = ''
      this.createError = ''
      if (response.createResponse.success) this.createSuccess = response.createResponse.message
      else this.createError = response.createResponse.message
    }))
    this.sub.add(this.dataStore.select(selectClinicDomainDataPage).pipe(take(1)).subscribe(async (page) => {
      this.page = page
      this.clinicDomainDataReadNotification.runNotification()
    }))
    // this.sub.add(this.dataStore.select(selectClinicDomainDataPage).pipe(
    //   skip(1),
    //   withLatestFrom(this.dataStore.select(selectClinicDomainDataClinics)),
    // ).subscribe(async ([page, clinics]) => {
    //   this.page = page
    //   this.selectClinics(clinics)
    // }))
    // this.sub.add(this.dataStore.select(selectClinicDomainDataClinics).pipe(skip(1)).subscribe((clinics) => {
    //   this.selectClinics(clinics)
    // }))
    this.sub.add(this.dataStore.select(selectClinicDomainDataMaxPage).pipe(skip(1)).subscribe(async (maxPage) => {
      this.maxPage = maxPage
      if (this.page < 1) {
        await this.router.navigate(['dashboard/vet/clinic/1'])
      }
      else if (this.page > this.maxPage) {
        await this.router.navigate(['dashboard/vet/clinic/' + this.maxPage])
      }
    }))
    this.sub.add(this.dataStore.select(selectClinicDomainDataTab).subscribe((tab) => {
      this.tab = tab as TableFormTabEnum
    }))
    // this.sub.add(this.dataStore.select(selectClinicDomainDataSelectedClinic).subscribe((selectedClinic) => {
    //   if (selectedClinic)
    //     this.selectedClinic = selectedClinic
    // }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  onTablePaginatorEvent(page: number) {
    this.dataStore.dispatch(clinicDomainDataPageAction({ page }))
    this.router.navigate(['dashboard/vet/clinic/' + page])
  }

  onTableNavEvent(tab: TableFormTabEnum) {
    this.dataStore.dispatch(clinicDomainDataTabAction({ tab }))
  }

  onDeleteEvent(id: number) {
    this.clinicDomainDataDeleteNotification.runNotification([id])
  }

  onCreateEvent(model: ClinicTableModel) {
    this.clinicDomainDataCreateNotification.runNotification(model)
  }

  onSelectEvent(id: number) {
    this.dataStore.dispatch(clinicDomainDataSelectAction({ id, isSelected: true }))
  }

  onUnselectEvent(id: number) {
    this.dataStore.dispatch(clinicDomainDataSelectAction({ id, isSelected: false }))
  }

  onDeleteSelectedEvent() {
    // of(true).pipe(
    //   take(1),
    //   withLatestFrom(this.dataStore.select(selectClinicDomainDataClinics)),
    //   map(([, clinics]) => clinics.filter(clinic => clinic.isSelected)),
    //   map(clinics => clinics.map(clinic => clinic.id)),
    //   map(ids => this.clinicDomainDataDeleteNotification.runNotification(ids)),
    // ).subscribe()
  }

  onSelectAllEvent() {
    of(this.clinics).pipe(
      take(1),
      map(clinics => clinics.map(clinic => clinic.id)),
    ).subscribe((clinics) => {
      clinics.forEach((id) => {
        this.dataStore.dispatch(clinicDomainDataSelectAction({ id, isSelected: true }))
      })
    })
  }

  onUnselectAllEvent() {
    of(this.clinics).pipe(
      take(1),
      map(clinics => clinics.map(clinic => clinic.id)),
    ).subscribe((clinics) => {
      clinics.forEach((id) => {
        this.dataStore.dispatch(clinicDomainDataSelectAction({ id, isSelected: false }))
      })
    })
  }

  onRefreshEvent() {
    //
  }

  onEditSelectEvent(id: number) {
    // of(true).pipe(
    //   take(1),
    //   withLatestFrom(this.dataStore.select(selectClinicDomainDataClinics)),
    //   map(([, clinics]) => clinics.find(clinic => clinic.id === id)),
    //   map((clinic) => {
    //     this.dataStore.dispatch(clinicDomainDataSelectedClinicAction({ selectedClinic: clinic }))
    //   }),
    //   map(() => this.dataStore.dispatch(clinicDomainDataTabAction({ tab: TableFormTabEnum.update }))),
    // ).subscribe()
  }

  onUpdateEvent(model: ClinicTableModel['domain']) {
    this.clinicDomainDataUpdateNotification.runNotification({ ...model })
  }

  getHeaders(): string[] {
    return Object.entries(this.formModel)
      .map(([key]) => key)
  }

  private selectClinics(clinics: ClinicTableModel[]) {
    const firstItem = (this.page - 1) * NUMBER_OF_ROWS_PER_PAGE
    const lastItem = firstItem + NUMBER_OF_ROWS_PER_PAGE
    this.clinics = clinics.filter((_, index) => index >= firstItem && index < lastItem)
    this.allSelected = this.clinics.length === 0 ? false : !this.clinics.find(clinic => !clinic.isSelected)
    this.dataStore.dispatch(clinicDomainDataMaxPageAction())
  }
}
