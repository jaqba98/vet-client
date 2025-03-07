import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ColorType, TextTagType } from '@vet-client/lib-type'
import { TextControlModel } from './text-control.model'

@Component({
  selector: 'lib-text-control',
  imports: [CommonModule],
  templateUrl: './text-control.component.html',
  styleUrl: './text-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TextControlComponent {
  @Input() tag: TextTagType = 'p'

  @Input() textControlColor: ColorType = 'dark-primary'
  @Input() textControlLineHeight = false
  @Input() textControlJustify = false
  @Input() textControlBold = false

  getClassList(): TextControlModel {
    return {
      'text-control--dark-primary': this.textControlColor === 'dark-primary',
      'text-control--dark-secondary': this.textControlColor === 'dark-secondary',
      'text-control--light-primary': this.textControlColor === 'light-primary',
      'text-control--primary': this.textControlColor === 'primary',
      'text-control--error': this.textControlColor === 'error',
      'text-control--success': this.textControlColor === 'success',
      'text-control--line-height': this.textControlLineHeight,
      'text-control--justify': this.textControlJustify,
      'text-control--bold': this.textControlBold,
    }
  }
}
