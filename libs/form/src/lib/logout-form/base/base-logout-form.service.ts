import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import {
  RoutePageEnum,
  RouteSectionEnum,
  RouteStoreModel,
  setRoute,
} from '@vet-client/lib-store'
import { HttpPostAppService } from '@vet-client/lib-http'
import { CookieService } from '@vet-client/lib-system'

@Injectable({ providedIn: 'root' })
export class BaseLogoutFormService {
  constructor(
    private readonly cookie: CookieService,
    private readonly httpPost: HttpPostAppService,
    private readonly store: Store<RouteStoreModel>,
  ) {}

  onSubmit() {
    const token = this.cookie.getToken()
    if (token === null) {
      return
    }
    this.httpPost.logoutPost({ token }).subscribe((response) => {
      if (response.success) {
        this.cookie.deleteCookie('token')
        this.store.dispatch(
          setRoute({ page: RoutePageEnum.home, section: RouteSectionEnum.home }),
        )
      }
    })
  }
}
