import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { MsalService } from '../msal/msal.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  name = signal('');
  username = signal('');

  constructor(
    private msal: MsalService,
    private router: Router,
  ) {}

  async ngOnInit() {
    const user = await this.msal.getAccount();
    this.name.set(user?.name ?? 'unknown');
    this.username.set(user?.username ?? 'unknown');
  }

  async logout() {
    await this.msal.logout();
    await this.router.navigate(['/login']);
  }
}
