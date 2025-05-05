import { Component, OnInit } from '@angular/core';
import { MsalService } from '../msal/msal.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private msalService: MsalService, private router: Router) {}

  async ngOnInit() {
    const account: any = await this.msalService.getAccount();
    console.log(account)

    if (!account?.username) {
      // Brak konta → przekierowanie na login
      this.router.navigate(['/login']);
    } else {
      this.user = account;
    }
  }

  logout() {
    this.msalService.logout().then(() => {
      this.router.navigate(['/login']);
    }).catch((err) => {
      console.error('Logout failed', err);
    });
  }
}
