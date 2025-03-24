import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetServiceFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-vet-service-view',
  imports: [
    SectionControlComponent,
    VetServiceFormComponent,
  ],
  templateUrl: './vet-service-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetServiceViewComponent {
  sectionId = RouteSectionEnum.dashboardVetService
}
