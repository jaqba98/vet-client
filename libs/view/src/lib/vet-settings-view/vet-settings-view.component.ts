import { Component } from '@angular/core'

import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetFormComponent } from '@vet-client/lib-form'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-vet-settings-view',
  imports: [SectionControlComponent, VetFormComponent],
  templateUrl: './vet-settings-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetSettingsViewComponent {
  sectionId = RouteSectionEnum.dashboardVetSettings
}
