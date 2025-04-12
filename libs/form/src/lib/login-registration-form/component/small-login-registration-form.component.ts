import { Component, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import {
  BaseFormBuilder,
  BaseFormComponent,
  BaseFormService,
} from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { LoginRegistrationNavMenuLogicModel, LoginRegistrationNavMenuFormModel } from '@vet-client/lib-domain'
import { BaseLoginRegistrationFormService } from '../base/base-login-registration-form.service'

@Component({
  selector: 'lib-small-login-registration-form',
  imports: [CommonModule, BaseFormComponent],
  templateUrl: '../base/base-login-registration-form.component.html',
  styleUrl: '../base/base-login-registration-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class SmallLoginRegistrationFormComponent
  extends BaseFormService<
    LoginRegistrationNavMenuFormModel,
    LoginRegistrationNavMenuLogicModel
  >
  implements OnInit, OnDestroy {
  formClass = 'form--small'

  constructor(
    private baseForm: BaseFormBuilder,
    private baseLoginRegistrationForm: BaseLoginRegistrationFormService,
  ) {
    super()
  }

  ngOnInit() {
    this.onInit()
    this.initBaseForm({
      login: this.baseForm.buildButtonIcon('login', faRightToBracket, 'primary').build(),
      registration: this.baseForm
        .buildButtonIcon('registration', faUserPlus, 'primary')
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
