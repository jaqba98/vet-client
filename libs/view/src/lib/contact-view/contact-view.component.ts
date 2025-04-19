import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { ContactFormComponent } from '@vet-client/lib-form'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-contact-view',
  imports: [SectionControlComponent, ContactFormComponent],
  templateUrl: './contact-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ContactViewComponent {
  sectionId = RouteSectionEnum.contact
}
