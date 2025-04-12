import { Component, OnDestroy, OnInit } from '@angular/core'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { CardControlComponent } from '@vet-client/lib-control'
import { VetDomainModel, VetFormModel } from '@vet-client/lib-domain'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetNotification } from '@vet-client/lib-http'
import { Store } from '@ngrx/store'
import { VetFormType } from '@vet-client/lib-store'

@Component({
  selector: 'lib-vet-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './vet-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetFormComponent
  extends BaseFormService<VetFormModel, VetDomainModel>
  implements OnInit, OnDestroy {
  constructor(
    private baseForm: BaseFormBuilder,
    private vet: VetNotification,
    private store: Store<VetFormType>,
  ) {
    super()
  }

  ngOnInit() {
    this.vet.runNotificationRead()
    this.onInit('Vet', this.vet.responseUpdate$)
    this.initBaseForm({
      id: this.baseForm.buildInput('text', 'ID').build(),
      licenseNumber: this.baseForm.buildInput('text', 'License Number').build(),
      licenseIssueDate: this.baseForm.buildInput('text', 'License Issue Date').build(),
      licenseExpiryDate: this.baseForm.buildInput('text', 'License Expiry Date').build(),
      specialization: this.baseForm.buildInput('text', 'Specialization').build(),
      yearsOfExperience: this.baseForm.buildInput('text', 'Years Of Experience').build(),
      accountId: this.baseForm.buildInput('text', 'Account Id').build(),
    })
    this.store.select('vetForm').subscribe((form) => {
      this.setControlValues(Object.entries(form.metadata))
    })
  }

  ngOnDestroy() {
    this.onDestroy()
  }

  override onSubmit(domain: VetDomainModel) {
    this.vet.runNotificationUpdate(domain)
  }
}
