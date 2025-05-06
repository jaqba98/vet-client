import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

import { MsalService } from '../../msal/msal.service';
import { RouteEnum } from '../../enum/route.enum';
import { UserStore } from '../../store/user.store';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'profile-view',
  templateUrl: './profile-view.component.html',
})
export class ProfileViewComponent implements OnInit {
  userSignal: WritableSignal<UserModel>;
  result = signal('unknown');

  private http = inject(HttpClient);

  constructor(
    private msalService: MsalService,
    private router: Router,
    private userStore: UserStore,
  ) {
    this.userSignal = userStore.data;
  }

  ngOnInit() {
    this.http.get<{ message: string }>('http://localhost:8080/hello-world').subscribe(result => {
      this.result.set(result.message);
    });
  }

  async logout() {
    await this.msalService.logout();
    this.userStore.reset();
    await this.router.navigate([RouteEnum.login]);
  }
}
