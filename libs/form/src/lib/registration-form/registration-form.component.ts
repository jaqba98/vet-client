import { Component } from '@angular/core';

import {
  BaseFormComponent,
  BaseFormService,
  HttpEndpointEnum,
  HttpMethodEnum,
  HttpService
} from '@vet-client/lib-system';
import { RegistrationFormDataModel, RegistrationFormModel } from './registration-form.model';

@Component({
  selector: 'lib-registration-form',
  imports: [BaseFormComponent],
  templateUrl: './registration-form.component.html'
})
export class RegistrationFormComponent extends BaseFormService<RegistrationFormModel, RegistrationFormDataModel> {
  constructor(private readonly http: HttpService) {
    super({
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
      confirmPassword: {
        kind: 'input',
        type: 'password',
        placeholder: 'Confirm password'
      },
      firstName: {
        kind: 'input',
        type: 'text',
        placeholder: 'First name'
      },
      lastName: {
        kind: 'input',
        type: 'text',
        placeholder: 'Last name'
      },
      role: {
        kind: 'input',
        type: 'text',
        placeholder: 'Role'
      },
      register: {
        kind: 'button',
        type: 'submit',
        text: 'Register'
      }
    });
  }

  override onSubmit(model: RegistrationFormDataModel) {
    this.http.execute({
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
        }
      }
      // todo: Fix the response type it is wrong!
    }).subscribe(response => {
      console.log(response);
    });
  }
}
