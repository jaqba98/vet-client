// done
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  ClinicDomainDataNotify,
  ClinicDomainDataType,
  ClinicDomainFormType,
} from '@vet-client/lib-store'
import { TableFormComponent } from '../table-form/table-form.component'
import { VetClinicFormStore } from './vet-clinic-form.store'
import { TableFormModel } from '../table-form/model/table-form.model'

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
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
