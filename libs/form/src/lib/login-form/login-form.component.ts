import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  RoutePageEnum,
  RouteSectionEnum,
  RouteStoreModel,
  setRoute,
} from '@vet-client/lib-store';
import { CookieService } from '@vet-client/lib-system';
import { HttpPostAppService } from '@vet-client/lib-http';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { CardControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { LoginFormModel, LoginModel } from './login-form.model';

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent, CardControlComponent],
  templateUrl: './login-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class LoginFormComponent extends BaseFormService<
  LoginFormModel,
  LoginModel
> {
  constructor(
    private readonly httpPost: HttpPostAppService,
    private readonly cookie: CookieService,
    private readonly store: Store<RouteStoreModel>
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
        color: 'primary'
      },
    });
  }

  override onSubmit(model: LoginModel) {
    const { email, password } = model;
    this.httpPost.loginPost({ email, password }).subscribe((response) => {
      this.initBaseForm();
      const { success, token } = response;
      if (success) {
        this.cookie.updateToken(token);
        this.store.dispatch(
          setRoute({
            page: RoutePageEnum.dashboard,
            section: RouteSectionEnum.dashboard,
          })
        );
      } else {
        this.error = 'Incorrect email address or password!';
      }
    });
  }
}
