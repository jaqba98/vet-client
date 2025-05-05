import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {MsalService} from '../msal/msal.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private msalService: MsalService, private router: Router) {
  }

  async canActivate(): Promise<boolean> {
    const account = await this.msalService.getAccount();
    if (account?.username) {
      return true;
    }
    await this.router.navigate(['/login']);
    return false;
  }
}
