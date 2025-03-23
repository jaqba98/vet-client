import { Component, OnDestroy, OnInit } from '@angular/core'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { CardControlComponent } from '@vet-client/lib-control'
import { LoginDomainModel, LoginFormModel } from '@vet-client/lib-domain'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { LoginNotification } from '@vet-client/lib-http'

@Component({
  selector: 'lib-login-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './login-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class LoginFormComponent
  extends BaseFormService<LoginFormModel, LoginDomainModel>
  implements OnInit, OnDestroy {
  constructor(
    private baseForm: BaseFormBuilder,
    private login: LoginNotification,
  ) {
    super()
  }

  ngOnInit() {
    this.onInit('Login', this.login.response$)
    this.initBaseForm({
      email: this.baseForm.buildInput('text', 'Email').build(),
      password: this.baseForm.buildInput('password', 'Password').build(),
    })
  }

  ngOnDestroy() {
    this.onDestroy()
  }

  override onSubmit(domain: LoginDomainModel) {
    this.login.runNotification(domain)
  }
}
