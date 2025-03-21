import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-vet-services-view',
  imports: [SectionControlComponent],
  templateUrl: './vet-services-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetServicesViewComponent {
  sectionId = RouteSectionEnum.dashboardVetSettings
}
