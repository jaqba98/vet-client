import { Component } from '@angular/core';

import { SectionControlComponent } from '@vet-client/lib-control';
import { RouteSectionEnum } from '@vet-client/lib-store';
import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-profile-view',
  imports: [SectionControlComponent],
  templateUrl: './profile-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ProfileViewComponent {
  sectionId = RouteSectionEnum.dashboardProfile;
}
