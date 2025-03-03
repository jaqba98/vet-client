import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { RoutePageEnum, RouteSectionEnum, RouteStoreType, setRoute } from '@vet-client/lib-store';
import { CookieService } from '@vet-client/lib-system';
import { HttpPostAppService } from '@vet-client/lib-http';

@Injectable({ providedIn: 'root' })
export class LoggedOutGuard implements CanActivate {
  constructor(
    private readonly store: Store<RouteStoreType>,
    private readonly cookie: CookieService,
    private readonly httpPost: HttpPostAppService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.cookie.getToken();
    if (!token) {
      return true;
    }
    return this.httpPost.authPost({ token }).pipe(
      map(response => {
        if (response.success) {
          this.store.dispatch(
            setRoute({
              page: RoutePageEnum.dashboard,
              section: RouteSectionEnum.dashboard
            })
          );
          return false;
        }
        return true;
      })
    );
  }
}
