import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetClinicFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-vet-clinic-view',
  imports: [SectionControlComponent, VetClinicFormComponent],
  templateUrl: './vet-clinic-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicViewComponent {
  sectionId = RouteSectionEnum.dashboardVetClinic
}
