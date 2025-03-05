import { Component } from '@angular/core';

import { SectionControlComponent } from '@vet-client/lib-control';
import { RouteSectionEnum } from '@vet-client/lib-store';
import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-account-settings-view',
  imports: [SectionControlComponent],
  templateUrl: './account-settings-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class AccountSettingsViewComponent {
  sectionId = RouteSectionEnum.dashboardAccountSettings;
}
