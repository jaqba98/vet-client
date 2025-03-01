import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { CookieService } from '../cookie/cookie.service';
import { RouterService } from '../router/router.service';
import { RouterEnum } from '../router/router.enum';
import { HttpPostAppService } from '@vet-client/lib-http';

@Injectable({ providedIn: 'root' })
export class IsClientRoleGuard implements CanActivate {
  constructor(
    private readonly cookie: CookieService,
    private readonly http: HttpPostAppService,
    private readonly router: RouterService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.cookie.getCookie('token');
    if (!token) return false;
    return this.http.isClientPost({ token }, res => {
      if (res.success) {
        this.router.redirect(RouterEnum.dashboardClient);
        return true;
      }
      return true;
    });
  }
}
