import { Component } from '@angular/core';

import { PriceControlComponent, SectionControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { RouteSectionEnum } from '@vet-client/lib-store';

@Component({
  selector: 'lib-price-view',
  imports: [SectionControlComponent, PriceControlComponent],
  templateUrl: './price-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class PriceViewComponent {
  sectionId = RouteSectionEnum.price;
}
