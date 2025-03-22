import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
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
  private readonly sub: Subscription

  title = 'Registration'

  constructor(private registration: RegistrationNotification) {
    super()
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.initBaseForm({
      email: BaseFormBuilder.buildInputText(
        'Email', [Validators.required, Validators.email, Validators.maxLength(255)],
      ),
      password: BaseFormBuilder.buildInputPassword(
        'Password', [Validators.required, Validators.maxLength(255)],
      ),
      confirmPassword: BaseFormBuilder.buildInputPassword(
        'Confirm password', [Validators.required, Validators.maxLength(255)],
      ),
      firstName: BaseFormBuilder.buildInputText(
        'First name', [Validators.required, Validators.maxLength(50)],
      ),
      lastName: BaseFormBuilder.buildInputText(
        'Last name', [Validators.required, Validators.maxLength(100)],
      ),
    })
    this.sub.add(this.registration.response$.subscribe((res) => {
      this.success = ''
      this.error = ''
      if (res.success) {
        this.success = res.message
      }
      else {
        this.error = res.message
      }
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  override onSubmit(data: RegistrationDomainModel) {
    this.registration.runNotification(data)
  }
}
