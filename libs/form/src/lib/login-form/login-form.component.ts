import { Component } from '@angular/core';

import { BaseFormComponent, BaseFormModel, BaseFormService, TControlsArray } from '@vet-client/lib-system';
import { LoginFormModel } from './login-form.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent extends BaseFormService {
  protected readonly loginForm: BaseFormModel<LoginFormModel> = {
    controls: {
      email: {
        kind: 'input',
        type: 'text',
        placeholder: 'Email'
      },
      password: {
        kind: 'input',
        type: 'password',
        placeholder: 'Password'
      },
      login: {
        kind: 'button',
        type: 'submit',
        text: 'Log in'
      }
    }
  };

  formGroup: FormGroup;

  controlsArray: TControlsArray;

  constructor() {
    super();
    this.formGroup = this.createFormGroup(this.loginForm);
    this.controlsArray = this.getControlsArray(this.loginForm);
  }
}
