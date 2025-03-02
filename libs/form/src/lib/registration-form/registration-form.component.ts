import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

import { CardControlComponent } from '@vet-client/lib-control';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { HttpPostAppService } from '@vet-client/lib-http';
import {
  RegistrationFormModel,
  RegistrationModel,
} from './registration-form.model';

@Component({
  selector: 'lib-registration-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './registration-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class RegistrationFormComponent extends BaseFormService<RegistrationFormModel, RegistrationModel> {
  constructor(private readonly httpPost: HttpPostAppService) {
    super({
      email: {
        kind: 'input',
        type: 'text',
        label: 'Email',
        placeholder: '',
        defaultValue: '',
        validators: [
          Validators.required,
          Validators.email,
          Validators.maxLength(255),
        ],
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
      register: {
        id: 'register',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Register',
        },
        defaultValue: false,
        fullWidth: false,
      },
    });
  }

  override onSubmit(model: RegistrationModel) {
    this.httpPost
      .registrationPost({
        email: model.email,
        password: model.password,
        confirmPassword: model.confirmPassword,
        firstName: model.firstName,
        lastName: model.lastName,
      })
      .subscribe((response) => {
        this.initBaseForm();
        const { success, errors } = response;
        if (success) {
          this.success = 'Success! Your account has been created.';
        } else {
          this.error = errors[0];
        }
      });
  }
}
