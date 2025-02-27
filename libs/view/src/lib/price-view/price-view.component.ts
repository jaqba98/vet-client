import { Component } from "@angular/core";

import { PriceControlComponent, SectionControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-price-view',
  imports: [SectionControlComponent, PriceControlComponent],
  templateUrl: './price-view.component.html',
  styleUrl: './price-view.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class PriceViewComponent {}
