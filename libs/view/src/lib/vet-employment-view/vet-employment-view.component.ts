import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetEmploymentFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-vet-employment-view',
  imports: [
    SectionControlComponent,
    VetEmploymentFormComponent,
  ],
  templateUrl: './vet-employment-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetEmploymentViewComponent {
  sectionId = RouteSectionEnum.dashboardVetEmployment
}
