import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { DashboardViewComponent } from '@vet-client/lib-view';
import { VetMenuFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-vet-page',
  imports: [DashboardViewComponent, VetMenuFormComponent],
  templateUrl: './vet-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetPageComponent {}
