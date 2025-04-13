import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TextControlTagEnum } from './text-control-tag.enum'

@Component({
  selector: 'lib-text-control',
  template: '<div #container></div>',
  hostDirectives: [BaseComponentDirective],
})
export class TextControlComponent implements OnInit {
  @ViewChild('container', { static: true }) container!: ElementRef

  @Input() tag = TextControlTagEnum.paragraph
  @Input() text = ''

  constructor(private readonly renderer: Renderer2) {
  }

  ngOnInit() {
    const element = this.renderer.createElement(this.tag)
    const text = this.renderer.createText(this.text)
    this.renderer.appendChild(element, text)
    this.renderer.appendChild(this.container.nativeElement, element)
  }
}
