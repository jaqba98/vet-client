import { Component } from '@angular/core'

import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetMedicalRecordFormComponent } from '@vet-client/lib-form'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-vet-medical-record-view',
  imports: [SectionControlComponent, VetMedicalRecordFormComponent],
  templateUrl: './vet-medical-record-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetMedicalRecordViewComponent {
  sectionId = RouteSectionEnum.dashboardVetMedicalRecord
}
