import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { VetMedicalRecordViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-vet-medical-record-page',
  imports: [VetMedicalRecordViewComponent],
  templateUrl: './vet-medical-record-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetMedicalRecordPageComponent {}
