import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-client-pets-view',
  imports: [SectionControlComponent],
  templateUrl: './client-pets-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientPetsViewComponent {
  sectionId = RouteSectionEnum.dashboardClientPets
}
