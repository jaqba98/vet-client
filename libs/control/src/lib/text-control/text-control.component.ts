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

  @Input() color: 'text__dark-primary' | 'text__light-primary' | 'text__primary' = 'text__dark-primary';

  constructor(
    private readonly renderer: Renderer2,
    private readonly elementRef: ElementRef,
  ) {
  }

  ngOnInit() {
    const element = this.renderer.createElement(this.tag);
    const text = this.renderer.createText(this.content);
    this.renderer.addClass(element, this.color);
    this.renderer.appendChild(element, text);
    this.elementRef.nativeElement.appendChild(element);
  }
}
