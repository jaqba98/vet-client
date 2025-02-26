import { Component } from '@angular/core';

import { BaseFormComponent, BaseFormService, RouterEnum, RouterService } from '@vet-client/lib-system';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ButtonControlTypeEnum } from '@vet-client/lib-control';
import { LoginRegistrationFormDataModel, LoginRegistrationFormModel } from './login-registration-form.model';

@Component({
  selector: 'lib-login-registration-form',
  imports: [BaseFormComponent],
  templateUrl: './login-registration-form.component.html',
  styleUrl: './login-registration-form.component.scss',
  hostDirectives: [BaseComponentDirective]
})
/** Login Registration Form */
export class LoginRegistrationFormComponent extends BaseFormService<
  LoginRegistrationFormModel,
  LoginRegistrationFormDataModel
> {
  constructor(private readonly router: RouterService) {
    super({
      login: {
        id: 'login',
        kind: 'button',
        value: {
          type: ButtonControlTypeEnum.text,
          text: 'Login'
        },
        defaultValue: false,
      },
      registration: {
        id: 'registration',
        kind: 'button',
        value: {
          type: ButtonControlTypeEnum.text,
          text: 'Registration'
        },
        defaultValue: false,
      },
    });
  }

  override onSubmit(model: LoginRegistrationFormDataModel) {
    if (model.login) {
      this.router.redirect(RouterEnum.login);
    } else if (model.registration) {
      this.router.redirect(RouterEnum.registration);
    }
  }
}
