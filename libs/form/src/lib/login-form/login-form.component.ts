// done
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CookieService,
  RouterEnum,
  RouterService,
} from '@vet-client/lib-system';
import { CardControlComponent, TextControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { LoginFormDataModel, LoginFormModel } from './login-form.model';
import { HttpPostAppService } from '@vet-client/lib-http';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';

@Component({
  selector: 'lib-login-form',
  imports: [CommonModule ,BaseFormComponent, CardControlComponent, TextControlComponent],
  templateUrl: './login-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class LoginFormComponent extends BaseFormService<LoginFormModel, LoginFormDataModel> {
  isLoginError = false;

  constructor(
    private readonly http: HttpPostAppService,
    private readonly cookie: CookieService,
    private readonly router: RouterService
  ) {
    super({
      email: {
        kind: 'input',
        type: 'text',
        label: 'Email',
        placeholder: '',
        defaultValue: '',
        validators: [],
      },
      password: {
        kind: 'input',
        type: 'password',
        label: 'Password',
        placeholder: '',
        defaultValue: '',
        validators: [],
      },
      login: {
        id: 'login',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Login',
        },
        defaultValue: false,
        fullWidth: false,
      },
    });
  }

  override onSubmit(model: LoginFormDataModel) {
    const { email, password } = model;
    this.http.loginPost({ email, password }, res => {
      if (res.success) {
        this.isLoginError = false;
        this.cookie.saveToCookie('token', res.token, 1);
        this.router.redirect(RouterEnum.dashboard);
      } else {
        this.isLoginError = true;
      }
    }).subscribe();
  }
}
