import { Component } from '@angular/core';

import { NavViewComponent, NavViewModel } from '@vet-client/lib-view';

@Component({
  selector: 'lib-dashboard-page',
  imports: [NavViewComponent],
  templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent {
  model: NavViewModel = {
    options: [
      {
        id: 'dashboard_1',
        type: 'button',
        value: { type: 'text', text: 'Dashboard 1' }
      },
      {
        id: 'dashboard_2',
        type: 'button',
        value: { type: 'text', text: 'Dashboard 2' }
      },
      {
        id: 'dashboard_3',
        type: 'button',
        value: { type: 'text', text: 'Dashboard 3' }
      },
      {
        id: 'dashboard_4',
        type: 'button',
        value: { type: 'text', text: 'Dashboard 4' }
      }
    ]
  };
}
