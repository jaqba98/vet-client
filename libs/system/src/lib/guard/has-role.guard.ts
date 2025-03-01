import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, Observable } from 'rxjs';

import { CookieService } from '../cookie/cookie.service';
import { HttpService } from '../http/service/http.service';
import { RouterService } from '../router/router.service';
import { HasRolePostHttpResponseModel } from '../http/model/http-response.model';
import { HttpMethodEnum } from '../http/enum/http-method.enum';
import { HttpEndpointEnum } from '../http/enum/http-endpoint.enum';
import { RouterEnum } from '../router/router.enum';

@Injectable({ providedIn: 'root' })
export class HasRoleGuard implements CanActivate {
  constructor(
    private readonly cookie: CookieService,
    private readonly http: HttpService,
    private readonly router: RouterService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.cookie.getCookie('token');
    if (!token) {
      return false;
    }
    return this.http
      .execute<HasRolePostHttpResponseModel>({
        method: HttpMethodEnum.post,
        type: {
          endpoint: HttpEndpointEnum.hasRole,
          request: { token },
        },
      })
      .pipe(
        map((response) => {
          if (response.hasRole) {
            return true;
          }
          this.router.redirect(RouterEnum.dashboardChooseRole);
          return true;
        })
      );
  }
}
