import { Component } from '@angular/core';

import { BaseFormComponent, BaseFormModel } from '@vet-client/lib-system';

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  loginForm: BaseFormModel = {
    controls: [
      { name: 'email' },
      { name: 'password' }
    ],
    submit: 'Log in'
  };
}
