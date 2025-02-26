import { Component } from '@angular/core';

import { NavViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-dashboard-page',
  imports: [NavViewComponent],
  templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent {
  title = 'dashboard works';
}
