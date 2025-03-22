import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { BaseLoginRegistrationFormModel, BaseLoginRegistrationModel } from '../base/base-login-registration-form.model'
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
    BaseLoginRegistrationFormModel,
    BaseLoginRegistrationModel
  >
  implements OnInit {
  loginRegistrationFormClass = 'base-login-registration-form--big'

  constructor(
    private baseLoginRegistrationForm: BaseLoginRegistrationFormService,
    private baseForm: BaseFormBuilder,
  ) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      login: this.baseForm.buildButton('login', 'Login', 'primary').build(),
      registration: this.baseForm.buildButton('registration', 'Registration', 'primary').build(),
    })
  }

  override onSubmit(model: BaseLoginRegistrationModel) {
    this.baseLoginRegistrationForm.onSubmit(model)
  }
}
