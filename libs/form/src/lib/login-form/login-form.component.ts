import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { CardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { LoginDomainDataModel, LoginDomainFormModel } from '@vet-client/lib-domain'
import { LoginDomainType, setLoginDomain } from '@vet-client/lib-store'

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent, CardControlComponent],
  templateUrl: './login-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class LoginFormComponent
  extends BaseFormService<LoginDomainFormModel, LoginDomainDataModel>
  implements OnInit {
  constructor(private readonly storeLoginDomain: Store<LoginDomainType>) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      email: {
        kind: 'input',
        type: 'text',
        label: 'Email',
        placeholder: '',
        defaultValue: '',
        validators: [],
        isEnabled: true,
      },
      password: {
        kind: 'input',
        type: 'password',
        label: 'Password',
        placeholder: '',
        defaultValue: '',
        validators: [],
        isEnabled: true,
      },
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
    })
  }

  override onSubmit(login: LoginDomainDataModel) {
    this.storeLoginDomain.dispatch(setLoginDomain(login))
  }
}
