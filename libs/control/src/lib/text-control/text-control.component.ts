// done
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-text-control',
  imports: [CommonModule],
  templateUrl: './text-control.component.html',
  styleUrl: './text-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class TextControlComponent {
  @Input() tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'p';

  @Input() color: 'dark-primary' | 'dark-secondary' | 'light-primary' | 'primary' | 'error' | 'success' = 'dark-primary';

  @Input() lineHeight = false;

  @Input() justify = false;

  @Input() bold = false;

  getClassList() {
    return {
      'line-height': this.lineHeight,
      'justify': this.justify,
      'bold': this.bold,
      'dark-primary': this.color === 'dark-primary',
      'dark-secondary': this.color === 'dark-secondary',
      'light-primary': this.color === 'light-primary',
      'primary': this.color === 'primary',
      'error': this.color === 'error',
      'success': this.color === 'success',
    };
  }
}
