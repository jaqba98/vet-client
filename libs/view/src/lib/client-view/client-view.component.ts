import { Component } from '@angular/core'

import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ClientFormComponent } from '@vet-client/lib-form'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-client-view',
  imports: [
    SectionControlComponent,
    ClientFormComponent,
  ],
  templateUrl: './client-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientViewComponent {
  sectionId = RouteSectionEnum.dashboardVetClient
}
