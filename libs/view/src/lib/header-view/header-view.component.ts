// done
import { Component } from "@angular/core";

import { SectionControlComponent, BigLogoControlComponent } from '@vet-client/lib-control';
import { RouteSectionEnum } from '@vet-client/lib-store';

@Component({
  selector: 'lib-header-view',
  imports: [SectionControlComponent, BigLogoControlComponent],
  templateUrl: './header-view.component.html'
})
export class HeaderViewComponent {
  sectionId = RouteSectionEnum.home;
}
