import { Component } from '@angular/core'

import {
  TextControlComponent,
} from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-about-us-view',
  imports: [SectionControlComponent, TextControlComponent],
  templateUrl: './about-us-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class AboutUsViewComponent {
  sectionId = RouteSectionEnum.aboutUs
}
