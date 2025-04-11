import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetPetsFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-vet-pets-view',
  imports: [SectionControlComponent, VetPetsFormComponent],
  templateUrl: './vet-pets-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetPetsViewComponent {
  sectionId = RouteSectionEnum.dashboardVetPet
}
