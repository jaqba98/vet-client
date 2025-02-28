// done
import { Component } from "@angular/core";

import { SectionControlComponent, TextControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-about-us-view',
  imports: [SectionControlComponent, TextControlComponent],
  templateUrl: './about-us-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class AboutUsViewComponent {}
