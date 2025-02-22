import { Component } from '@angular/core';

import { BaseFormComponent, BaseFormModel, ControlKindEnum } from '@vet-client/lib-system';
import { LoginFormModel } from './login-form.model';

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  loginForm: BaseFormModel<LoginFormModel> = {
    controls: [
      {
        kind: ControlKindEnum.input,
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        defaultValue: '',
        isInModel: true
      },
      {
        kind: ControlKindEnum.input,
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        defaultValue: '',
        isInModel: true
      },
      {
        kind: ControlKindEnum.button,
        name: 'login',
        type: 'submit',
        text: 'Log in',
        defaultValue: true,
        isInModel: false
      }
    ],
    onSubmit: (model: LoginFormModel) => {
      console.log(`Email: ${model.email}, Password: ${model.password}`);
    }
  };
}
