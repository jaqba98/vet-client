// done
import { Component } from '@angular/core';
import { faRightFromBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import {
  LoginRegistrationSmallFormDataModel,
  LoginRegistrationSmallFormModel
} from './login-registration-small-form.model';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { Store } from '@ngrx/store';
import { RoutePageEnum, RouteSectionEnum, RouteStoreModel, setRoute } from '@vet-client/lib-store';

@Component({
  selector: 'lib-login-registration-small-form',
  imports: [BaseFormComponent],
  templateUrl: './login-registration-small-form.component.html',
  styleUrl: './login-registration-small-form.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class LoginRegistrationSmallFormComponent extends BaseFormService<
  LoginRegistrationSmallFormModel,
  LoginRegistrationSmallFormDataModel
> {
  constructor(private readonly store: Store<RouteStoreModel>) {
    super({
      login: {
        id: 'login',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faRightFromBracket,
            color: 'icon__light-primary'
          }
        },
        defaultValue: false,
        fullWidth: false
      },
      registration: {
        id: 'registration',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faUserPlus,
            color: 'icon__light-primary'
          }
        },
        defaultValue: false,
        fullWidth: false
      },
    });
  }

  override onSubmit(model: LoginRegistrationSmallFormDataModel) {
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
