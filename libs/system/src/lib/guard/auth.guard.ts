import { CanActivate, Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { CookieService } from '../cookie/cookie.service';
import { HttpService } from '../http/service/http.service';
import { HttpMethodEnum } from '../http/enum/http-method.enum';
import { HttpEndpointEnum } from '../http/enum/http-endpoint.enum';
import { AuthPostHttpResponseModel } from '../http/model/http-response.model';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private readonly cookie: CookieService,
    private readonly http: HttpService,
    private readonly router: Router
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.cookie.getCookie('token');
    if (!token) {
      this.router.navigate(['/']).then(() => of(false));
    }
    return this.http.execute<AuthPostHttpResponseModel>({
      method: HttpMethodEnum.post,
      type: {
        endpoint: HttpEndpointEnum.auth,
        request: { token }
      }
    }).pipe(
      map(response => {
        if (response.isAuth) return true;
        this.router.navigate(['/']).then(() => of(false));
        return false;
      })
    );
  }
}
