// done
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, Observable, skip, Subscription, take } from 'rxjs'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  ClinicDomainDataNotify,
  ClinicDomainDataType,
  ClinicDomainFormType,
  setClinicDomainPageData,
} from '@vet-client/lib-store'
import { TableFormComponent } from '../table-form/table-form.component'
import { VetClinicFormStore } from './vet-clinic-form.store'
import { TableFormModel } from '../table-form/model/table-form.model'
import { Router } from '@angular/router'
import { NUMBER_OF_ROWS_PER_PAGE } from '../table-form/const/table-form.const'

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

  constructor(
    public readonly store: VetClinicFormStore,
    private readonly router: Router,
    private readonly clinicDomainDataNotify: ClinicDomainDataNotify,
    private readonly storeClinicDomainForm: Store<ClinicDomainFormType>,
    private readonly storeClinicDomainData: Store<ClinicDomainDataType>,
  ) {}

  ngOnInit() {
    this.clinicDomainDataNotify.notify()
    this.sub.add(this.storeClinicDomainForm.select('clinicDomainForm').subscribe((form) => {
      this.formModel = { ...form }
    }))
    this.sub.add(this.storeClinicDomainData.select('clinicDomainData').subscribe((data) => {
      this.store.data = data
      this.store.read()
    }))
    this.sub.add(this.store.page$.pipe(skip(1)).subscribe((page) => {
      console.log(page)
      this.storeClinicDomainData.dispatch(setClinicDomainPageData({ page }))
    }))
    this.sub.add(this.selectPage().subscribe((data) => {
      this.router.navigate(['dashboard/vet/clinic/' + data.page])
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  selectPage() {
    return this.storeClinicDomainData.select('clinicDomainData').pipe(
      map(data => ({
        page: data.page,
        maxPage: Math.ceil(data.clinics.length / NUMBER_OF_ROWS_PER_PAGE),
      })),
    )
  }

  dispatchPage(page: number) {
    return this.storeClinicDomainData.dispatch(setClinicDomainPageData({ page }))
  }
}
