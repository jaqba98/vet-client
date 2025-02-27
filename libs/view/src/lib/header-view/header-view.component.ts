import { Component } from "@angular/core";

import { SectionControlComponent, BigLogoControlComponent } from '@vet-client/lib-control';

@Component({
  selector: 'lib-header-view',
  imports: [SectionControlComponent, BigLogoControlComponent],
  templateUrl: './header-view.component.html'
})
/** Header View */
export class HeaderViewComponent {}
