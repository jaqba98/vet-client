import { Component } from '@angular/core';

import {
  BaseFormComponent,
  BaseFormService,
  HttpEndpointEnum,
  HttpMethodEnum,
  HttpService,
  RegistrationPostHttpResponseModel,
} from '@vet-client/lib-system';
import { CardControlComponent } from '@vet-client/lib-control';
import {
  RegistrationFormDataModel,
  RegistrationFormModel,
} from './registration-form.model';

@Component({
  selector: 'lib-registration-form',
  imports: [BaseFormComponent, CardControlComponent],
  templateUrl: './registration-form.component.html',
})
export class RegistrationFormComponent extends BaseFormService<
  RegistrationFormModel,
  RegistrationFormDataModel
> {
  constructor(private readonly http: HttpService) {
    super({
      email: {
        kind: 'input',
        type: 'text',
        label: '',
        placeholder: 'Email',
        defaultValue: '',
        validators: []
      },
      password: {
        kind: 'input',
        type: 'password',
        label: '',
        placeholder: 'Password',
        defaultValue: '',
        validators: []
      },
      confirmPassword: {
        kind: 'input',
        type: 'password',
        label: '',
        placeholder: 'Confirm password',
        defaultValue: '',
        validators: []
      },
      firstName: {
        kind: 'input',
        type: 'text',
        label: '',
        placeholder: 'First name',
        defaultValue: '',
        validators: []
      },
      lastName: {
        kind: 'input',
        type: 'text',
        label: '',
        placeholder: 'Last name',
        defaultValue: '',
        validators: []
      },
      role: {
        kind: 'input',
        type: 'text',
        label: '',
        placeholder: 'Role',
        defaultValue: '',
        validators: []
      },
      register: {
        id: 'register',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Register',
        },
        defaultValue: false
      },
    });
  }

  override onSubmit(model: RegistrationFormDataModel) {
    this.http
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
            role: model.role,
          },
        },
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
