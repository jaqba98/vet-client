import { Component } from '@angular/core'

import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetClinicFormComponent } from '@vet-client/lib-form'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-vet-clinic-view',
  imports: [SectionControlComponent, VetClinicFormComponent],
  templateUrl: './vet-clinic-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicViewComponent {
  sectionId = RouteSectionEnum.dashboardVetClinic
}
