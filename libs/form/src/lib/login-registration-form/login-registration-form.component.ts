import { Component } from '@angular/core';

import {
  BaseFormComponent,
  BaseFormService,
  RouterEnum,
  RouterService,
} from '@vet-client/lib-system';
import {
  LoginRegistrationFormDataModel,
  LoginRegistrationFormModel,
} from './login-registration-form.model';
import { ButtonControlTypeEnum } from '@vet-client/lib-control';

@Component({
  selector: 'lib-login-registration-form',
  imports: [BaseFormComponent],
  templateUrl: './login-registration-form.component.html',
})
export class LoginRegistrationFormComponent extends BaseFormService<
  LoginRegistrationFormModel,
  LoginRegistrationFormDataModel
> {
  constructor(private readonly router: RouterService) {
    super({
      login: {
        id: 'login',
        kind: 'button',
        value: { type: ButtonControlTypeEnum.text, text: 'Login', position: 'left' },
        defaultValue: false,
      },
      registration: {
        id: 'registration',
        kind: 'button',
        value: { type: ButtonControlTypeEnum.text, text: 'Registration', position: 'left' },
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
