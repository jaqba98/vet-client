// done
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-text-control',
  imports: [CommonModule],
  template: '',
  styleUrl: './text-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class TextControlComponent implements OnInit {
  @Input() tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'p';

  @Input() content = '';

  @Input() color: 'dark-primary' | 'dark-secondary' | 'light-primary' | 'primary' | 'error' | 'success' = 'dark-primary';

  @Input() lineHeight = false;

  @Input() justify = false;

  constructor(
    private readonly renderer: Renderer2,
    private readonly elementRef: ElementRef,
  ) {
  }

  ngOnInit() {
    const element = this.renderer.createElement(this.tag);
    const text = this.renderer.createText(this.content);
    this.renderer.addClass(element, this.color);
    if (this.lineHeight) {
      this.renderer.addClass(element, 'line-height');
    }
    if (this.justify) {
      this.renderer.addClass(element, 'justify');
    }
    this.renderer.appendChild(element, text);
    this.elementRef.nativeElement.appendChild(element);
  }
}
