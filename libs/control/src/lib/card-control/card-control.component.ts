import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-card-control',
  imports: [CommonModule],
  templateUrl: './card-control.component.html',
  styleUrl: './card-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class CardControlComponent {
  @Input() title = '';

  isTitle() {
    return this.title !== '';
  }
}
