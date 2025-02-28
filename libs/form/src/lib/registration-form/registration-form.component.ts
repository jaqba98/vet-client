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
import { CardControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';

import { RegistrationFormDataModel, RegistrationFormModel } from './registration-form.model';
import { map } from 'rxjs';

@Component({
  selector: 'lib-registration-form',
  imports: [BaseFormComponent, CardControlComponent],
  templateUrl: './registration-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class RegistrationFormComponent extends BaseFormService<RegistrationFormModel, RegistrationFormDataModel> {
  constructor(private readonly http: HttpService) {
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
            lastName: model.lastName,
            role: model.role
          },
        },
      })
      .pipe(
        map((response) => {
          console.log(response);
        })
      );
  }
}
