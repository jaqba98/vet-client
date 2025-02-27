import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  BaseFormComponent,
  BaseFormService,
  CookieService,
  HttpEndpointEnum,
  HttpMethodEnum,
  HttpService,
  LoginPostHttpResponseModel,
} from '@vet-client/lib-system';
import {
  ButtonControlTypeEnum,
  CardControlComponent,
  InputControlTypeEnum,
} from '@vet-client/lib-control';
import { LoginFormDataModel, LoginFormModel } from './login-form.model';

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent, CardControlComponent],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent extends BaseFormService<
  LoginFormModel,
  LoginFormDataModel
> {
  constructor(
    private readonly http: HttpService,
    private readonly cookie: CookieService,
    private readonly route: Router
  ) {
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
      login: {
        id: 'login',
        kind: 'button',
        value: {
          type: ButtonControlTypeEnum.text,
          text: 'Login',
        },
        defaultValue: false,
      },
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
            password: model.password,
          },
        },
      })
      .subscribe((response) => {
        const { success, token } = response;
        if (success) {
          this.cookie.saveToCookie('token', token, 1);
          this.route.navigate(['/dashboard']);
        }
      });
  }
}
