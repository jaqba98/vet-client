import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { IconControlComponent } from '../icon-control/icon-control.component'
import { ButtonControlModel } from './button-control.model'
import { TextControlComponent } from '../text-control/text-control.component'

@Component({
  selector: 'lib-button-control',
  imports: [CommonModule, IconControlComponent, TextControlComponent],
  templateUrl: './button-control.component.html',
  styleUrl: './button-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class ButtonControlComponent {
  @Output() event = new EventEmitter<string>()

  @Input({ required: true }) model!: ButtonControlModel

  onClick(event: string) {
    this.event.emit(event)
  }

  getClassList() {
    return {
      'button-control__button--text': this.model.type === 'text',
      'button-control__button--icon': this.model.type === 'icon',
      'button-control__button--link': this.model.type === 'link',
      // 'button-control__button--full-width': this.model.fullWidth,
      'button-control__button--transparent': this.model.buttonColor === 'transparent',
      'button-control__button--primary': this.model.buttonColor === 'primary',
      'button-control__button--dark-primary': this.model.buttonColor === 'dark-primary',
      'button-control__button--dark-secondary': this.model.buttonColor === 'dark-secondary',
      'button-control__button--success': this.model.buttonColor === 'success',
      'button-control__button--error': this.model.buttonColor === 'error',
      // 'button-control__button--width40px': this.model.isSquare,
    }
  }
}
