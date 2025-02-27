import { Component } from "@angular/core";

import { SectionControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-about-us-view',
  imports: [SectionControlComponent],
  templateUrl: './about-us-view.component.html',
  styleUrl: './about-us-view.component.scss',
  hostDirectives: [BaseComponentDirective]
})
/** About Us View */
export class AboutUsViewComponent {}
