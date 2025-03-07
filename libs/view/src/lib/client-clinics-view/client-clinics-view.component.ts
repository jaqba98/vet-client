import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-client-clinics-view',
  imports: [SectionControlComponent],
  templateUrl: './client-clinics-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientClinicsViewComponent {
  sectionId = RouteSectionEnum.dashboardClientClinics
}
