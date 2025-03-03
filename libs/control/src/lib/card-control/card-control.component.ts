import { Component, Input } from '@angular/core';

import { TextControlComponent } from '../text-control/text-control.component';
import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-card-control',
  imports: [TextControlComponent],
  templateUrl: './card-control.component.html',
  styleUrl: './card-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class CardControlComponent {
  @Input({ required: true }) title!: string;
}
