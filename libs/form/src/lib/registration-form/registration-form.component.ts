import { Component, OnDestroy, OnInit } from '@angular/core'
import { Validators } from '@angular/forms'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { CardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { RegistrationDomainModel, RegistrationFormModel } from '@vet-client/lib-domain'
import { RegistrationNotification } from '@vet-client/lib-http'

@Component({
  selector: 'lib-registration-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './registration-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class RegistrationFormComponent
  extends BaseFormService<RegistrationFormModel, RegistrationDomainModel>
  implements OnInit, OnDestroy {
  constructor(
    private registration: RegistrationNotification,
    private baseForm: BaseFormBuilder,
  ) {
    super('Registration', registration)
  }

  ngOnInit() {
    this.initBaseForm({
      email: this.baseForm
        .buildInput('text', 'Email')
        .buildValidators([Validators.required, Validators.email, Validators.maxLength(255)])
        .build(),
      password: this.baseForm
        .buildInput('password', 'Password')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      confirmPassword: this.baseForm
        .buildInput('password', 'Confirm password')
        .buildValidators([Validators.required, Validators.maxLength(255)])
        .build(),
      firstName: this.baseForm
        .buildInput('text', 'First name')
        .buildValidators([Validators.required, Validators.maxLength(50)])
        .build(),
      lastName: this.baseForm
        .buildInput('text', 'Last name')
        .buildValidators([Validators.required, Validators.maxLength(100)])
        .build(),
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  override onSubmit(data: RegistrationDomainModel) {
    this.registration.runNotification(data)
  }
}
