import { Component } from '@angular/core'

import { RouteSectionEnum } from '@vet-client/lib-store'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-header-view',
  imports: [SectionControlComponent],
  templateUrl: './header-view.component.html',
})
export class HeaderViewComponent {
  sectionId = RouteSectionEnum.home
}
