import { Component } from '@angular/core'

import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetServiceClinicFormComponent } from '@vet-client/lib-form'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-vet-service-clinic-view',
  imports: [
    SectionControlComponent,
    VetServiceClinicFormComponent,
  ],
  templateUrl: './vet-service-clinic-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetServiceClinicViewComponent {
  sectionId = RouteSectionEnum.dashboardVetServiceClinic
}
