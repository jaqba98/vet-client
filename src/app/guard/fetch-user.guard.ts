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
    const homeAccountId = user?.homeAccountId;
    const name = user?.name;
    const username = user?.username;
    if (!homeAccountId || !name || !username) return false;
    this.userStore.setData({ homeAccountId, name, username });
    return true;
  }
}
