import { Component } from '@angular/core';

import {
  BaseFormComponent,
  BaseFormService,
  HttpEndpointEnum,
  HttpMethodEnum,
  HttpService,
  RegistrationPostHttpResponseModel,
} from '@vet-client/lib-system';
import {
  ButtonControlTypeEnum,
  CardControlComponent,
  InputControlTypeEnum,
} from '@vet-client/lib-control';
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
        type: InputControlTypeEnum.text,
        label: '',
        placeholder: 'Email',
        defaultValue: '',
      },
      password: {
        kind: 'input',
        type: InputControlTypeEnum.password,
        label: '',
        placeholder: 'Password',
        defaultValue: '',
      },
      confirmPassword: {
        kind: 'input',
        type: InputControlTypeEnum.password,
        label: '',
        placeholder: 'Confirm password',
        defaultValue: '',
      },
      firstName: {
        kind: 'input',
        type: InputControlTypeEnum.text,
        label: '',
        placeholder: 'First name',
        defaultValue: '',
      },
      lastName: {
        kind: 'input',
        type: InputControlTypeEnum.text,
        label: '',
        placeholder: 'Last name',
        defaultValue: '',
      },
      role: {
        kind: 'input',
        type: InputControlTypeEnum.text,
        label: '',
        placeholder: 'Role',
        defaultValue: '',
      },
      register: {
        id: 'register',
        kind: 'button',
        value: {
          type: ButtonControlTypeEnum.text,
          text: 'Register',
        },
        defaultValue: false,
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
