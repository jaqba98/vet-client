import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { VetPatientsViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-vet-patients-page',
  imports: [VetPatientsViewComponent],
  templateUrl: './vet-patients-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetPatientsPageComponent {}
