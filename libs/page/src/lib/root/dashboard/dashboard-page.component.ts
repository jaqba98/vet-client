// done
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  ChooseRoleViewComponent,
  FooterViewComponent,
  MainViewComponent,
  NavViewComponent
} from '@vet-client/lib-view';
import {
  DashboardMenuOptionsFormComponent,
  LogoutFormComponent,
  LogoutSmallFormComponent
} from '@vet-client/lib-form';

@Component({
  selector: 'lib-dashboard-page',
  imports: [
    NavViewComponent,
    LogoutFormComponent,
    LogoutSmallFormComponent,
    DashboardMenuOptionsFormComponent,
    RouterOutlet,
    ChooseRoleViewComponent,
    MainViewComponent,
    FooterViewComponent,
  ],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {}
