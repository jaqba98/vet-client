import { Component } from "@angular/core";

import { SectionControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ContactFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-contact-view',
  imports: [SectionControlComponent, ContactFormComponent],
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class ContactViewComponent {}
