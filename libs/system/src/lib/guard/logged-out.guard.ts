// done
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { CookieService } from '../cookie/cookie.service';
import { HttpPostAppService } from '@vet-client/lib-http';
import { Store } from '@ngrx/store';
import { RoutePageEnum, RouteSectionEnum, RouteStoreModel, setRoute } from '@vet-client/lib-store';

@Injectable({ providedIn: 'root' })
export class LoggedOutGuard implements CanActivate {
  constructor(
    private readonly store: Store<{ route: RouteStoreModel }>,
    private readonly cookie: CookieService,
    private readonly http: HttpPostAppService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.cookie.getCookie('token');
    if (!token) return true;
    return this.http.authPost({ token }, res => {
      if (!res.success) {
        return true;
      }
      this.store.dispatch(setRoute({ page: RoutePageEnum.dashboard, section: RouteSectionEnum.dashboard }));
      return false;
    });
  }
}
