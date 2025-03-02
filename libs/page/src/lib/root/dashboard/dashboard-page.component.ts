// done
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  FooterViewComponent,
  MainViewComponent,
  NavViewComponent
} from '@vet-client/lib-view';
import {
  BigLogoutFormComponent,
  DashboardNavMenuFormComponent,
  SmallLogoutFormComponent
} from '@vet-client/lib-form';

@Component({
  selector: 'lib-dashboard-page',
  imports: [
    NavViewComponent,
    RouterOutlet,
    MainViewComponent,
    FooterViewComponent,
    DashboardNavMenuFormComponent,
    SmallLogoutFormComponent,
    BigLogoutFormComponent,
  ],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {}
