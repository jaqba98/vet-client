import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '../msal/msal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(private msalService: MsalService, private router: Router) {
  }

  async ngOnInit() {
    const account: any = await this.msalService.getAccount();

    if (account?.username) {
      // Użytkownik już zalogowany — przekieruj do profilu
      this.router.navigate(['/profile']);
    }
  }

  login() {
    this.msalService.login().then(
      (response) => {
        this.user = response.account;
        this.router.navigate(['/profile']);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
