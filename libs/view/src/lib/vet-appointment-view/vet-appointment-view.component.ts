import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetAppointmentFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-vet-appointment-view',
  imports: [
    SectionControlComponent,
    VetAppointmentFormComponent,
  ],
  templateUrl: './vet-appointment-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetAppointmentViewComponent {
  sectionId = RouteSectionEnum.dashboardVetAppointment
}
