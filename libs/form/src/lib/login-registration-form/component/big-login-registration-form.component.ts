import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
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

  constructor(private readonly baseLoginRegistrationForm: BaseLoginRegistrationFormService) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      login: {
        id: 'login',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Login',
        },
        defaultValue: false,
        fullWidth: false,
        color: 'primary',
        isEnabled: true,
        width40px: false,
      },
      registration: {
        id: 'registration',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Registration',
        },
        defaultValue: false,
        fullWidth: false,
        color: 'primary',
        isEnabled: true,
        width40px: false,
      },
    })
  }

  override onSubmit(model: BaseLoginRegistrationModel) {
    this.baseLoginRegistrationForm.onSubmit(model)
  }
}
