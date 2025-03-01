// done
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  FooterViewComponent,
  MainViewComponent,
  NavViewComponent
} from '@vet-client/lib-view';
import {
  DashboardNavMenuFormComponent,
  LogoutFormComponent,
  LogoutSmallFormComponent
} from '@vet-client/lib-form';

@Component({
  selector: 'lib-dashboard-page',
  imports: [
    NavViewComponent,
    LogoutFormComponent,
    LogoutSmallFormComponent,
    RouterOutlet,
    MainViewComponent,
    FooterViewComponent,
    DashboardNavMenuFormComponent,
  ],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {}
