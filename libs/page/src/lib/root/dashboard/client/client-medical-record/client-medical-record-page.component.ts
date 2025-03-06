import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ClientMedicalRecordViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-client-medical-record-page',
  imports: [ClientMedicalRecordViewComponent],
  templateUrl: './client-medical-record-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientMedicalRecordPageComponent {}
