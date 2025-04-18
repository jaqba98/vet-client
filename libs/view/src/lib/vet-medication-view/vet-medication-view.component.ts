import { Component } from '@angular/core'

import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetMedicationFormComponent } from '@vet-client/lib-form'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-vet-medication-view',
  imports: [
    SectionControlComponent,
    VetMedicationFormComponent,
  ],
  templateUrl: './vet-medication-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetMedicationViewComponent {
  sectionId = RouteSectionEnum.dashboardVetMedication
}
