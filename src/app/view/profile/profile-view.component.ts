import { Component, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

import { MsalService } from '../../msal/msal.service';
import { RouteEnum } from '../../enum/route.enum';
import { UserStore } from '../../store/user.store';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'profile-view',
  templateUrl: './profile-view.component.html',
})
export class ProfileViewComponent {
  userSignal: WritableSignal<UserModel>;

  constructor(
    private msalService: MsalService,
    private router: Router,
    private userStore: UserStore,
  ) {
    this.userSignal = userStore.data;
  }

  async logout() {
    await this.msalService.logout();
    this.userStore.reset();
    await this.router.navigate([RouteEnum.login]);
  }
}
