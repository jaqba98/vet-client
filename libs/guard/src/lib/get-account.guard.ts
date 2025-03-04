import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { AccountStoreType, setAccount } from '@vet-client/lib-store';
import { CookieService } from '@vet-client/lib-system';
import { HttpPostAppService } from '@vet-client/lib-http';

@Injectable({ providedIn: 'root' })
export class GetAccountGuard implements CanActivate {
  constructor(
    private readonly store: Store<AccountStoreType>,
    private readonly cookie: CookieService,
    private readonly httpPost: HttpPostAppService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.cookie.getToken();
    if (!token) {
      return false;
    }
    return this.httpPost.getAccountPost({ token }).pipe(
      map(response => {
        if (response.success) {
          this.store.dispatch(
            setAccount({
              firstName: response.firstName,
              lastName: response.lastName
            })
          );
          return true;
        }
        return true;
      })
    );
  }
}
