import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { LoginRegistrationDomainModel } from '@vet-client/lib-domain'
import {
  RoutePageEnum,
  RouteSectionEnum,
  RouteStoreModel,
  routeSetAction,
} from '@vet-client/lib-store'

@Injectable({ providedIn: 'root' })
export class BaseLoginRegistrationFormService {
  constructor(private readonly routeStore: Store<RouteStoreModel>) {}

  onSubmit(domain: LoginRegistrationDomainModel) {
    if (domain.login) {
      this.routeStore.dispatch(
        routeSetAction({ page: RoutePageEnum.login, section: RouteSectionEnum.login }),
      )
    }
    else if (domain.registration) {
      this.routeStore.dispatch(
        routeSetAction({ page: RoutePageEnum.registration, section: RouteSectionEnum.registration }),
      )
    }
  }
}
