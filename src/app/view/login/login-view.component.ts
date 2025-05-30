import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MsalService } from '../../msal/msal.service';
import { RouteEnum } from '../../enum/route.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login-view',
  imports: [CommonModule],
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent {
  constructor(
    private msalService: MsalService,
    private router: Router,
  ) {}

  login() {
    this.msalService
      .login()
      .then(() => {
        this.router.navigate([RouteEnum.profile]);
      })
      .catch((error) => {
        if (
          error.errorCode === 'user_cancelled' ||
          error.message?.includes('user_cancelled')
        ) {
          console.log('Login cancelled by user.');
        } else {
          console.error('Login error:', error);
        }
      });
  }
}
