import { Component } from '@angular/core';

import { BaseFormComponent, BaseFormModel, ControlKindEnum } from '@vet-client/lib-system';
import { ButtonControlBuilder, InputControlBuilder } from '@vet-client/lib-control';
import { LoginFormModel } from './login-form.model';

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  loginForm: BaseFormModel<LoginFormModel>;

  constructor(
    private readonly inputBuilder: InputControlBuilder,
    private readonly buttonBuilder: ButtonControlBuilder
  ) {
    this.loginForm = {
      controls: [
        { kind: ControlKindEnum.input, ...this.inputBuilder.buildEmailInput('email', 'Email') },
        { kind: ControlKindEnum.input, ...this.inputBuilder.buildPasswordInput('password', 'Password') },
        { kind: ControlKindEnum.button, ...this.buttonBuilder.buildSubmitButton('login', 'Log in') }
      ],
      onSubmit: (model: LoginFormModel) => {
        console.log(model);
      },
    };
  }
}
