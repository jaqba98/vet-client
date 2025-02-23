import { Component } from '@angular/core';

import {
  BaseFormComponent,
  BaseFormService,
  HttpEndpointEnum,
  HttpMethodEnum,
  HttpService
} from '@vet-client/lib-system';
import { LoginFormDataModel, LoginFormModel } from './login-form.model';

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent extends BaseFormService<LoginFormModel, LoginFormDataModel> {
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
      login: {
        kind: 'button',
        type: 'submit',
        text: 'Log in'
      }
    });
  }

  override onSubmit(model: LoginFormDataModel) {
    this.http.execute({
      method: HttpMethodEnum.post,
      type: {
        endpoint: HttpEndpointEnum.login,
        request: {
          email: model.email,
          password: model.password
        }
      }
    }).subscribe(response => {
      console.log(response);
    });
  }
}
