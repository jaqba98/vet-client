// done
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, Observable } from 'rxjs';

import { CookieService } from '../cookie/cookie.service';
import { RouterService } from '../router/router.service';
import { RouterEnum } from '../router/router.enum';
import { HttpPostAppService } from '@vet-client/lib-http';

@Injectable({ providedIn: 'root' })
export class LoggedOutGuard implements CanActivate {
  constructor(
    private readonly cookie: CookieService,
    private readonly http: HttpPostAppService,
    private readonly router: RouterService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.cookie.getCookie('token');
    if (!token) return true;
    return this.http.authPost({ token }, res => {
      if (!res.success) {
        return true;
      }
      this.router.redirect(RouterEnum.dashboard);
      return false;
    });
  }
}
