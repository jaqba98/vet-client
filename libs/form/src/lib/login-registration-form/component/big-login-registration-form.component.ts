import { Component, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import {
  BaseFormBuilder,
  BaseFormComponent,
  BaseFormService,
} from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { LoginRegistrationNavMenuLogicModel, LoginRegistrationNavMenuFormModel } from '@vet-client/lib-domain'
import { BaseLoginRegistrationFormService } from '../base/base-login-registration-form.service'

@Component({
  selector: 'lib-big-login-registration-form',
  imports: [CommonModule, BaseFormComponent],
  templateUrl: '../base/base-login-registration-form.component.html',
  styleUrl: '../base/base-login-registration-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class BigLoginRegistrationFormComponent
  extends BaseFormService<
    LoginRegistrationNavMenuFormModel,
    LoginRegistrationNavMenuLogicModel
  >
  implements OnInit, OnDestroy {
  formClass = 'form--big'

  constructor(
    private baseForm: BaseFormBuilder,
    private baseLoginRegistrationForm: BaseLoginRegistrationFormService,
  ) {
    super()
  }

  ngOnInit() {
    this.onInit()
    this.initBaseForm({
      login: this.baseForm.buildButton('login', 'Login', 'primary').build(),
      registration: this.baseForm
        .buildButton('registration', 'Registration', 'primary')
        .build(),
    })
  }

  ngOnDestroy() {
    this.onDestroy()
  }

  override onSubmit(domain: LoginRegistrationNavMenuLogicModel) {
    this.baseLoginRegistrationForm.onSubmit(domain)
  }
}
