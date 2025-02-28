// done
import { Component } from '@angular/core';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-system';
import { CardControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { RegistrationFormDataModel, RegistrationFormModel } from './registration-form.model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'lib-registration-form',
  imports: [BaseFormComponent, CardControlComponent],
  templateUrl: './registration-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class RegistrationFormComponent extends BaseFormService<RegistrationFormModel, RegistrationFormDataModel> {
  constructor() {
    super({
      email: {
        kind: 'input',
        type: 'text',
        label: 'Email',
        placeholder: '',
        defaultValue: '',
        validators: [Validators.required, Validators.email, Validators.maxLength(255)],
      },
      password: {
        kind: 'input',
        type: 'password',
        label: 'Password',
        placeholder: '',
        defaultValue: '',
        validators: [Validators.required, Validators.maxLength(255)],
      },
      confirmPassword: {
        kind: 'input',
        type: 'password',
        label: 'Confirm password',
        placeholder: '',
        defaultValue: '',
        validators: [Validators.required, Validators.maxLength(255)],
      },
      firstName: {
        kind: 'input',
        type: 'text',
        label: 'First name',
        placeholder: '',
        defaultValue: '',
        validators: [Validators.required, Validators.maxLength(50)],
      },
      lastName: {
        kind: 'input',
        type: 'text',
        label: 'Last name',
        placeholder: '',
        defaultValue: '',
        validators: [Validators.required, Validators.maxLength(100)],
      },
      role: {
        kind: 'input',
        type: 'text',
        label: 'Role',
        placeholder: '',
        defaultValue: '',
        validators: [Validators.required, Validators.maxLength(6)],
      },
      register: {
        id: 'register',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Register'
        },
        defaultValue: false,
        fullWidth: false
      },
    });
  }

  override onSubmit(model: RegistrationFormDataModel) {
    console.log(model);
  }
}
