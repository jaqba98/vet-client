import { Component } from '@angular/core';

import { LogoutFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-dashboard-page',
  imports: [LogoutFormComponent],
  templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent {}
