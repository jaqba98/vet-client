import { Component, effect, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

import { MsalService } from '../../msal/msal.service';
import { RouteEnum } from '../../enum/route.enum';
import { UserStore } from '../../store/user.store';
import { UserModel } from '../../model/user.model';
import { HttpService } from '../../service/http.service';
import { EndpointEnum } from '../../enum/endpoint.enum';
import { MessageModel } from '../../model/message.model';

@Component({
  selector: 'profile-view',
  templateUrl: './profile-view.component.html',
})
export class ProfileViewComponent {
  user: WritableSignal<UserModel>;
  message = signal('unknown');

  constructor(
    private msalService: MsalService,
    private router: Router,
    private userStore: UserStore,
    private httpService: HttpService<ProfileViewComponent>,
  ) {
    this.user = userStore.data;
    effect(() => {
      this.httpService.post<UserModel, MessageModel>(
        this,
        EndpointEnum.createUser,
        { ...this.user() },
        (self, response) => {
          self.message.set(response.message);
        },
      );
    });
  }

  async logout() {
    await this.msalService.logout();
    this.userStore.reset();
    await this.router.navigate([RouteEnum.login]);
  }
}
