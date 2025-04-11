import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetServiceFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-vet-service-clinic-view',
  imports: [
    SectionControlComponent,
    VetServiceFormComponent,
  ],
  templateUrl: './vet-service-clinic-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetServiceClinicViewComponent {
  sectionId = RouteSectionEnum.dashboardVetServiceClinic
}
