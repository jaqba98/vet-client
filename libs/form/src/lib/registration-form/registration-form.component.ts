import { Component, OnDestroy, OnInit } from '@angular/core'
import { Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { skip, Subscription } from 'rxjs'

import { CardControlComponent } from '@vet-client/lib-control'
import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { RegistrationDomainDataModel, RegistrationDomainFormModel } from '@vet-client/lib-domain'
import { RegistrationDomainDataNotification, RegistrationDomainResponseType } from '@vet-client/lib-store'

@Component({
  selector: 'lib-registration-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './registration-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class RegistrationFormComponent
  extends BaseFormService<RegistrationDomainFormModel, RegistrationDomainDataModel>
  implements OnInit, OnDestroy {
  private readonly sub: Subscription

  constructor(
    private readonly store: Store<RegistrationDomainResponseType>,
    private readonly registrationDomainForm: RegistrationDomainDataNotification,
  ) {
    super()
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.initBaseForm({
      id: BaseFormBuilder.buildHiddenControl(),
      email: BaseFormBuilder.buildInputText('Email', [Validators.required, Validators.email, Validators.maxLength(255)], true),
      password: BaseFormBuilder.buildInputPassword('Password', [Validators.required, Validators.maxLength(255)], true),
      confirmPassword: BaseFormBuilder.buildInputPassword('Confirm password', [Validators.required, Validators.maxLength(255)], true),
      firstName: BaseFormBuilder.buildInputText('First name', [Validators.required, Validators.maxLength(50)], true),
      lastName: BaseFormBuilder.buildInputText('Last name', [Validators.required, Validators.maxLength(100)], true),
      role: BaseFormBuilder.buildHiddenControl(),
      isVerified: BaseFormBuilder.buildHiddenControl(),
      pictureUrl: BaseFormBuilder.buildHiddenControl(),
      register: BaseFormBuilder.buildButtonText('register', 'Register', 'primary', true, false),
    })
    this.sub.add(this.store.select('registrationDomainResponse').pipe(skip(1)).subscribe((res) => {
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

  override onSubmit(data: RegistrationDomainDataModel) {
    this.registrationDomainForm.runNotification(data)
  }
}
