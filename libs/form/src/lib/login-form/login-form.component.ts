import { Component } from '@angular/core';

import { BaseFormComponent, BaseFormModel, ControlKindEnum } from '@vet-client/lib-system';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  loginForm: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.input,
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        defaultValue: ''
      },
      {
        kind: ControlKindEnum.input,
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        defaultValue: ''
      },
      {
        kind: ControlKindEnum.button,
        name: 'login',
        type: 'submit',
        text: 'Log in'
      }
    ],
    onSubmit: (formGroup: FormGroup) => {
      console.log(formGroup);
    },
  };
}
