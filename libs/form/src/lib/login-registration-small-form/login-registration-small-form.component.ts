import { Component } from '@angular/core';
import { faRightFromBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { BaseFormComponent, BaseFormService, RouterEnum, RouterService } from '@vet-client/lib-system';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import {
  LoginRegistrationSmallFormDataModel,
  LoginRegistrationSmallFormModel
} from './login-registration-small-form.model';

@Component({
  selector: 'lib-login-registration-small-form',
  imports: [BaseFormComponent],
  templateUrl: './login-registration-small-form.component.html',
  styleUrl: './login-registration-small-form.component.scss',
  hostDirectives: [BaseComponentDirective]
})
/** Login Registration Small Form */
export class LoginRegistrationSmallFormComponent extends BaseFormService<
  LoginRegistrationSmallFormModel,
  LoginRegistrationSmallFormDataModel
> {
  constructor(private readonly router: RouterService) {
    super({
      login: {
        id: 'login',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faRightFromBracket,
            color: 'icon__dark-primary'
          }
        },
        defaultValue: false,
      },
      registration: {
        id: 'registration',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faUserPlus,
            color: 'icon__dark-primary'
          }
        },
        defaultValue: false,
      },
    });
  }

  override onSubmit(model: LoginRegistrationSmallFormDataModel) {
    if (model.login) {
      this.router.redirect(RouterEnum.login);
    } else if (model.registration) {
      this.router.redirect(RouterEnum.registration);
    }
  }
}
