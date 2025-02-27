import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { CardControlComponent } from '../card-control/card-control.component';
import { ButtonControlModel } from '../button-control/button-control.model';
import { ButtonControlTypeEnum } from '../button-control/button-control-type.enum';
import { ButtonControlComponent } from '../button-control/button-control.component';

@Component({
  selector: 'lib-price-control',
  imports: [CommonModule, CardControlComponent, ButtonControlComponent],
  templateUrl: './price-control.component.html',
  styleUrl: './price-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class PriceControlComponent {
  @Input({ required: true }) type!: string;

  @Input({ required: true }) description!: string;

  @Input({ required: true }) money!: string;

  @Input({ required: true }) elements!: string[];

  buttonModel: ButtonControlModel = {
    id: 'price',
    value: {
      type: ButtonControlTypeEnum.text,
      text: 'Get started',
    },
  };
}
