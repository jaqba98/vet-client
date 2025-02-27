import { Component } from '@angular/core';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-system';
import { CardControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { LoginFormDataModel, LoginFormModel } from './login-form.model';

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent, CardControlComponent],
  templateUrl: './login-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class LoginFormComponent extends BaseFormService<LoginFormModel, LoginFormDataModel> {
  constructor() {
    super({
      email: {
        kind: 'input',
        type: 'text',
        label: 'Email',
        placeholder: '',
        defaultValue: '',
      },
      password: {
        kind: 'input',
        type: 'password',
        label: 'Password',
        placeholder: '',
        defaultValue: '',
      },
      forgotPassword: {
        id: 'forgotPassword',
        kind: 'button',
        value: {
          type: 'link',
          text: 'Forgot your password?'
        },
        defaultValue: false,
      },
      login: {
        id: 'login',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Login',
        },
        defaultValue: false,
      },
      registration: {
        id: 'registration',
        kind: 'button',
        value: {
          type: 'link',
          text: "Don't have an account?"
        },
        defaultValue: false,
      },
    });
  }

  override onSubmit(model: LoginFormDataModel) {
    console.log(model);
  }
}
