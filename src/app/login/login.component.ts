import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MsalService } from '../msal/msal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private msal: MsalService,
    private router: Router,
  ) {}

  async login() {
    await this.msal.login();
    await this.router.navigate(['/profile']);
  }
}
