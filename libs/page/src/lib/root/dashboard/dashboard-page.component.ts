// done
import { Component } from '@angular/core';

import { NavViewComponent } from '@vet-client/lib-view';
import { LogoutFormComponent, LogoutSmallFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-dashboard-page',
  imports: [
    NavViewComponent,
    LogoutFormComponent,
    LogoutSmallFormComponent
  ],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {}
