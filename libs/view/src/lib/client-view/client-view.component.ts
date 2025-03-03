import { Component } from '@angular/core';

import {
  SectionControlComponent,
  TextControlComponent,
} from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { RouteSectionEnum } from '@vet-client/lib-store';

@Component({
  selector: 'lib-client-view',
  imports: [SectionControlComponent, TextControlComponent],
  templateUrl: './client-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ClientViewComponent {
  sectionId = RouteSectionEnum.dashboardClient;
}
