// done
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { CookieService } from '../cookie/cookie.service';
import { RouterService } from '../router/router.service';
import { HttpPostAppService } from '@vet-client/lib-http';
import { Store } from '@ngrx/store';
import { RoutePageEnum, RouteSectionEnum, RouteStoreType, setRoute } from '@vet-client/lib-store';

@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanActivate {
  constructor(
    private readonly store: Store<RouteStoreType>,
    private readonly cookie: CookieService,
    private readonly http: HttpPostAppService,
    private readonly router: RouterService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.cookie.getCookie('token');
    if (!token) {
      this.store.dispatch(setRoute({ page: RoutePageEnum.home, section: RouteSectionEnum.home }));
      return false;
    }
    return true;
    // return this.http.authPost({ token }, res => {
    //   if (!res.success) {
    //     this.store.dispatch(setRoute({ page: RoutePageEnum.home, section: RouteSectionEnum.home }));
    //     return false;
    //   }
    //   return true;
    // });
  }
}
