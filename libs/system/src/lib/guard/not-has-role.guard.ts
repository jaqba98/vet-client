import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { HttpPostAppService } from '@vet-client/lib-http';
import {
  RoutePageEnum,
  RouteSectionEnum,
  RouteStoreModel,
  setRoute,
} from '@vet-client/lib-store';
import { CookieService } from '../cookie/cookie.service';

@Injectable({ providedIn: 'root' })
export class NotHasRoleGuard implements CanActivate {
  constructor(
    private readonly store: Store<{ route: RouteStoreModel }>,
    private readonly cookie: CookieService,
    private readonly http: HttpPostAppService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.cookie.getCookie('token');
    if (!token) return false;
    return this.http.hasRolePost({ token }, (res) => {
      if (res.success) {
        this.store.dispatch(setRoute({ page: RoutePageEnum.dashboard, section: RouteSectionEnum.dashboard }));
        return true;
      }
      return true;
    });
  }
}
