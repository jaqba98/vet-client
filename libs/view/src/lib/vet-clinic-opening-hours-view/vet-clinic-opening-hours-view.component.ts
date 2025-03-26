import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetClinicOpeningHoursFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-vet-clinic-opening-hours-view',
  imports: [
    SectionControlComponent,
    VetClinicOpeningHoursFormComponent,
  ],
  templateUrl: './vet-clinic-opening-hours-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicOpeningHoursViewComponent {
  sectionId = RouteSectionEnum.dashboardVetClinicOpeningHours
}
