import { Component } from '@angular/core'

import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-profile-view',
  imports: [SectionControlComponent],
  templateUrl: './profile-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ProfileViewComponent {
  sectionId = RouteSectionEnum.dashboardProfile
}
