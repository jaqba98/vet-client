import { Component } from '@angular/core';

import { SectionControlComponent } from '@vet-client/lib-control';
import { RouteSectionEnum } from '@vet-client/lib-store';
import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-vet-settings-view',
  imports: [SectionControlComponent],
  templateUrl: './vet-settings-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class VetSettingsViewComponent {
  sectionId = RouteSectionEnum.dashboardVetVetSettings;
}
