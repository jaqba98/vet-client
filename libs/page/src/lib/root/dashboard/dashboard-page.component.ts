// done
import { Component } from '@angular/core';

import { NavViewComponent } from '@vet-client/lib-view';
import {
  LoginRegistrationFormComponent, LoginRegistrationSmallFormComponent,
  LogoutFormComponent,
  LogoutSmallFormComponent,
  MenuOptionsFormComponent
} from '@vet-client/lib-form';

@Component({
  selector: 'lib-dashboard-page',
  imports: [
    NavViewComponent,
    LogoutFormComponent,
    LogoutSmallFormComponent,
    LoginRegistrationFormComponent,
    MenuOptionsFormComponent,
    LoginRegistrationSmallFormComponent,
  ],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {}
