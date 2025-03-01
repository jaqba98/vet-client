// done
import { Component } from '@angular/core';

import { RouterService } from '@vet-client/lib-system';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { LoginRegistrationFormDataModel, LoginRegistrationFormModel } from './login-registration-form.model';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { RoutePageEnum, RouteSectionEnum, RouteStoreModel, setRoute } from '@vet-client/lib-store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-login-registration-form',
  imports: [BaseFormComponent],
  templateUrl: './login-registration-form.component.html',
  styleUrl: './login-registration-form.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class LoginRegistrationFormComponent extends BaseFormService<
  LoginRegistrationFormModel,
  LoginRegistrationFormDataModel
> {
  constructor(
    private readonly store: Store<RouteStoreModel>,
    private readonly router: RouterService
) {
    super({
      login: {
        id: 'login',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Login'
        },
        defaultValue: false,
        fullWidth: false
      },
      registration: {
        id: 'registration',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Registration'
        },
        defaultValue: false,
        fullWidth: false
      },
    });
  }

  override onSubmit(model: LoginRegistrationFormDataModel) {
    if (model.login) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.login, section: RouteSectionEnum.login })
      );
    } else if (model.registration) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.registration, section: RouteSectionEnum.registration })
      );
    }
  }
}
