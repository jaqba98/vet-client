import { Component } from '@angular/core'

import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetOpeningHourFormComponent } from '@vet-client/lib-form'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-vet-opening-hour-view',
  imports: [
    SectionControlComponent,
    VetOpeningHourFormComponent,
  ],
  templateUrl: './vet-opening-hour-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetOpeningHourViewComponent {
  sectionId = RouteSectionEnum.dashboardVetOpeningHour
}
