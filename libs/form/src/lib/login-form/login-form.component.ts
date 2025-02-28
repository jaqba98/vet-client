// done
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
        validators: []
      },
      password: {
        kind: 'input',
        type: 'password',
        label: 'Password',
        placeholder: '',
        defaultValue: '',
        validators: []
      },
      login: {
        id: 'login',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Login',
        },
        defaultValue: false,
        fullWidth: false
      },
    });
  }

  override onSubmit(model: LoginFormDataModel) {
    console.log(model);
  }
}
