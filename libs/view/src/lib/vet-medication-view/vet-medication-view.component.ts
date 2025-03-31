import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetEmploymentFormComponent, VetMedicationFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-vet-medication-view',
  imports: [
    SectionControlComponent,
    VetMedicationFormComponent,
    VetEmploymentFormComponent,
  ],
  templateUrl: './vet-medication-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetMedicationViewComponent {
  sectionId = RouteSectionEnum.dashboardVetMedication
}
