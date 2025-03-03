import { Component } from '@angular/core';

import {
  SectionControlComponent,
  TextControlComponent,
} from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { RouteSectionEnum } from '@vet-client/lib-store';

@Component({
  selector: 'lib-vet-view',
  imports: [SectionControlComponent, TextControlComponent],
  templateUrl: './vet-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class VetViewComponent {
  sectionId = RouteSectionEnum.dashboardVet;
}
