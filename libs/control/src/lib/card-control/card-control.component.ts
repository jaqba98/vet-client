// done
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TextControlComponent } from '../text-control/text-control.component';

@Component({
  selector: 'lib-card-control',
  imports: [CommonModule, TextControlComponent],
  templateUrl: './card-control.component.html',
  styleUrl: './card-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class CardControlComponent {
  @Input({ required: true }) title!: string;

  @Input() maxWidth = '100%';
}
