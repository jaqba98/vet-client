import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MsalService } from '../../msal/msal.service';
import { RouteEnum } from '../../enum/route.enum';

@Component({
  selector: 'login-view',
  templateUrl: './login-view.component.html',
})
export class LoginViewComponent {
  constructor(
    private msalService: MsalService,
    private router: Router,
  ) {}

  async login() {
    await this.msalService.login();
    await this.router.navigate([RouteEnum.profile]);
  }
}
