import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  RoutePageEnum,
  RouteSectionEnum,
  RouteStoreModel,
  setRoute,
} from '@vet-client/lib-store';
import { BaseLoginRegistrationModel } from './base-login-registration-form.model';

@Injectable({ providedIn: 'root' })
export class BaseLoginRegistrationFormService {
  constructor(private readonly store: Store<RouteStoreModel>) {}

  onSubmit(model: BaseLoginRegistrationModel) {
    const { login, registration } = model;
    if (login) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.login, section: RouteSectionEnum.login })
      );
      return;
    }
    if (registration) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.registration, section: RouteSectionEnum.registration })
      );
      return;
    }
  }
}
