import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { DashboardViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-vet-page',
  imports: [DashboardViewComponent],
  templateUrl: './vet-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetPageComponent {}
