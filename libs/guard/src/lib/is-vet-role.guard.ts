import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { RoutePageEnum, RouteSectionEnum, RouteStoreType, setRoute } from '@vet-client/lib-store';
import { CookieService } from '@vet-client/lib-system';
import { HttpPostAppService } from '@vet-client/lib-http';

@Injectable({ providedIn: 'root' })
export class IsVetRoleGuard implements CanActivate {
  constructor(
    private readonly store: Store<RouteStoreType>,
    private readonly cookie: CookieService,
    private readonly httpPost: HttpPostAppService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.cookie.getToken();
    if (!token) {
      this.store.dispatch(
        setRoute({
          page: RoutePageEnum.home,
          section: RouteSectionEnum.home
        })
      );
      return false;
    }
    return this.httpPost.isVetPost({ token }).pipe(
      map(response => {
        if (response.success) {
          return true;
        }
        this.store.dispatch(
          setRoute({
            page: RoutePageEnum.dashboardClient,
            section: RouteSectionEnum.dashboardClient
          })
        );
        return false;
      })
    );
  }
}
