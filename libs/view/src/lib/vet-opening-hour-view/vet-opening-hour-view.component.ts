import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetClinicOpeningHoursFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-vet-opening-hour-view',
  imports: [
    SectionControlComponent,
    VetClinicOpeningHoursFormComponent,
  ],
  templateUrl: './vet-opening-hour-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetOpeningHourViewComponent {
  sectionId = RouteSectionEnum.dashboardVetClinicOpeningHours
}
