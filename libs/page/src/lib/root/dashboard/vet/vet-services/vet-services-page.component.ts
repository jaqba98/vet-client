import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { VetServicesViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-vet-services-page',
  imports: [VetServicesViewComponent],
  templateUrl: './vet-services-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetServicesPageComponent {}
