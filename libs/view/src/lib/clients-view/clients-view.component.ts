import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ClientFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-clients-view',
  imports: [
    SectionControlComponent,
    ClientFormComponent,
  ],
  templateUrl: './clients-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientsViewComponent {
  sectionId = RouteSectionEnum.dashboardVetClients
}
