import { Component } from '@angular/core';

import { NAV_VIEW_DASHBOARD, NavViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-dashboard-page',
  imports: [NavViewComponent],
  templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent {
  model = NAV_VIEW_DASHBOARD;
}
