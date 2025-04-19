import { Component } from '@angular/core'

import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-account-settings-view',
  imports: [SectionControlComponent],
  templateUrl: './account-settings-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class AccountSettingsViewComponent {
  sectionId = RouteSectionEnum.dashboardAccountSettings
}
