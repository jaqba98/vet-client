import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { CookieService } from '../cookie/cookie.service';
import { HttpPostAppService } from '@vet-client/lib-http';
import { Store } from '@ngrx/store';
import { RouteStoreModel } from '@vet-client/lib-store';

@Injectable({ providedIn: 'root' })
export class IsClientRoleGuard implements CanActivate {
  constructor(
    private readonly store: Store<{ route: RouteStoreModel }>,
    private readonly cookie: CookieService,
    private readonly http: HttpPostAppService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.cookie.getCookie('token');
    if (!token) return false;
    return true;
    // return this.http.isClientPost({ token }, res => {
    //   if (res.success) {
    //     this.store.dispatch(setRoute({ page: RoutePageEnum.dashboardClient, section: RouteSectionEnum.dashboardClient }));
    //     return true;
    //   }
    //   return true;
    // });
  }
}
