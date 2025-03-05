import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { VetMedicationViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-vet-medication-page',
  imports: [VetMedicationViewComponent],
  templateUrl: './vet-medication-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetMedicationPageComponent {}
