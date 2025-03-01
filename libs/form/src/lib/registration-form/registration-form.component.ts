// done
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

import {
  BaseFormComponent,
  BaseFormService,
  HttpEndpointEnum,
  HttpMethodEnum,
  HttpService,
  RegistrationPostHttpResponseModel,
} from '@vet-client/lib-system';
import { CardControlComponent, TextControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';

import { RegistrationFormDataModel, RegistrationFormModel } from './registration-form.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'lib-registration-form',
  imports: [
    BaseFormComponent,
    CardControlComponent,
    NgIf,
    TextControlComponent,
  ],
  templateUrl: './registration-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class RegistrationFormComponent extends BaseFormService<
  RegistrationFormModel,
  RegistrationFormDataModel
> {
  isRegistrationError = false;

  isRegistrationSuccess = false;

  registrationError = '';

  registrationSuccess = '';

  constructor(private readonly http: HttpService) {
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

  override onSubmit(model: RegistrationFormDataModel) {
    return this.http
      .execute<RegistrationPostHttpResponseModel>({
        method: HttpMethodEnum.post,
        type: {
          endpoint: HttpEndpointEnum.registration,
          request: {
            email: model.email,
            password: model.password,
            confirmPassword: model.confirmPassword,
            firstName: model.firstName,
            lastName: model.lastName
          },
        },
      })
      .subscribe((response) => {
        console.log(response);
        this.isRegistrationSuccess = false;
        this.isRegistrationError = false;
        this.registrationSuccess = '';
        this.registrationError = '';
        if (response.success) {
          this.isRegistrationSuccess = true;
          this.registrationSuccess = 'New account created successfully!';
        } else {
          this.isRegistrationError = true;
          this.registrationError = response.errors[0];
        }
      });
  }
}
