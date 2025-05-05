import {Injectable} from '@angular/core';
import {AccountInfo, PublicClientApplication} from '@azure/msal-browser';

import {MSAL_CONFIG} from './msal.config';

@Injectable({providedIn: 'root'})
export class MsalService {
  private msalInstance: PublicClientApplication;
  private initialized: boolean;

  constructor() {
    this.msalInstance = new PublicClientApplication(MSAL_CONFIG);
    this.initialized = false;
  }

  async login(): Promise<any> {
    await this.ensureInitialized();
    return this.msalInstance.loginPopup();
  }

  async logout(): Promise<void> {
    await this.ensureInitialized();
    const currentAccount: AccountInfo | null = this.msalInstance.getAllAccounts()[0];
    return this.msalInstance.logoutPopup({ account: currentAccount });
  }

  async getAccount(): Promise<AccountInfo | null> {
    await this.ensureInitialized();
    return this.msalInstance.getAllAccounts()[0] || null;
  }

  private async ensureInitialized(): Promise<void> {
    if (!this.initialized) {
      await this.msalInstance.initialize();
      this.initialized = true;
    }
  }
}
