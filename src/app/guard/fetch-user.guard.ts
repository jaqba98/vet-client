import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { MsalService } from '../msal/msal.service';
import { UserStore } from '../store/user.store';

@Injectable({ providedIn: 'root' })
export class FetchUserGuard implements CanActivate {
  constructor(
    private msalService: MsalService,
    private userStore: UserStore,
  ) {}

  async canActivate(): Promise<boolean> {
    const user = await this.msalService.getAccount();
    const name = user?.name;
    const username = user?.username;
    if (!name || !username) return false;
    this.userStore.setData({ name, username });
    return true;
  }
}
