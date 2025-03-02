// done
import { Component } from "@angular/core";

import { SectionControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ContactFormComponent } from '@vet-client/lib-form';
import { RouteSectionEnum } from '@vet-client/lib-store';

@Component({
  selector: 'lib-contact-view',
  imports: [SectionControlComponent, ContactFormComponent],
  templateUrl: './contact-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ContactViewComponent {
  sectionId = RouteSectionEnum.contact;
}
