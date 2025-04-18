import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'

@Component({
  selector: 'lib-header-view',
  imports: [SectionControlComponent],
  templateUrl: './header-view.component.html',
})
export class HeaderViewComponent {
  sectionId = RouteSectionEnum.home
}
