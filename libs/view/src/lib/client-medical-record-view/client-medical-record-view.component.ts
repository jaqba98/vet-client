import { Component } from '@angular/core';

import { SectionControlComponent } from '@vet-client/lib-control';
import { RouteSectionEnum } from '@vet-client/lib-store';
import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-client-medical-record-view',
  imports: [SectionControlComponent],
  templateUrl: './client-medical-record-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ClientMedicalRecordViewComponent {
  sectionId = RouteSectionEnum.dashboardClientMedicalRecord;
}
