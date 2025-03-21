import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { CardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { LoginDomainModel, LoginFormModel } from '@vet-client/lib-domain'
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
  private readonly sub: Subscription

  title = 'Login'

  constructor(private login: LoginNotification) {
    super()
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.initBaseForm({
      email: BaseFormBuilder.buildInputText('Email', []),
      password: BaseFormBuilder.buildInputPassword('Password', []),
    })
    this.sub.add(this.login.response$.subscribe((res) => {
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

  override onSubmit(domain: LoginDomainModel) {
    this.login.runNotification(domain)
  }
}
