import { Component } from '@angular/core';

import { SectionControlComponent } from '@vet-client/lib-control';
import { ChooseRoleFormComponent } from '@vet-client/lib-form';
import { RouteSectionEnum } from '@vet-client/lib-store';
import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-choose-role-view',
  imports: [SectionControlComponent, ChooseRoleFormComponent],
  templateUrl: './choose-role-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ChooseRoleViewComponent {
  sectionId = RouteSectionEnum.dashboardChooseRole;
}
