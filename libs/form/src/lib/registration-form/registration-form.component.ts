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
        placeholder: 'Email',
        defaultValue: ''
      },
      password: {
        kind: 'input',
        type: 'password',
        placeholder: 'Password',
        defaultValue: ''
      },
      confirmPassword: {
        kind: 'input',
        type: 'password',
        placeholder: 'Confirm password',
        defaultValue: ''
      },
      firstName: {
        kind: 'input',
        type: 'text',
        placeholder: 'First name',
        defaultValue: ''
      },
      lastName: {
        kind: 'input',
        type: 'text',
        placeholder: 'Last name',
        defaultValue: ''
      },
      role: {
        kind: 'input',
        type: 'text',
        placeholder: 'Role',
        defaultValue: ''
      },
      register: {
        id: 'register',
        kind: 'button',
        type: 'submit',
        value: {
          type: 'text',
          text: 'Register'
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
