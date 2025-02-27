import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { CardControlComponent } from '../card-control/card-control.component';

@Component({
  selector: 'lib-price-control',
  imports: [CommonModule, CardControlComponent],
  templateUrl: './price-control.component.html',
  styleUrl: './price-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class PriceControlComponent {}
