import { Component } from '@angular/core';

import {
  BaseFormComponent,
  BaseFormService,
  CookieService,
  HttpEndpointEnum,
  HttpMethodEnum,
  HttpService, LoginPostHttpResponseModel
} from '@vet-client/lib-system';
import { LoginFormDataModel, LoginFormModel } from './login-form.model';

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent extends BaseFormService<LoginFormModel, LoginFormDataModel> {
  constructor(
    private readonly http: HttpService,
    private readonly cookie: CookieService
  ) {
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
    this.http
      .execute<LoginPostHttpResponseModel>({
        method: HttpMethodEnum.post,
        type: {
          endpoint: HttpEndpointEnum.login,
          request: {
            email: model.email,
            password: model.password
          }
        }
      }).subscribe(response => {
        const { success, token } = response;
        if (success) {
          this.cookie.saveToCookie('token', token, 1);
          const value = this.cookie.getCookie('token');
          console.log(value);
        }
      });
  }
}
