import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { DashboardViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-client-page',
  imports: [DashboardViewComponent],
  templateUrl: './client-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientPageComponent {}
