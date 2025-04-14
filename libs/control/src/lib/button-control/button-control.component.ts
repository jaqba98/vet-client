import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TextControlComponent } from '../text-control/text-control.component'
import { ButtonControlTextModel } from './button-control.model'

@Component({
  selector: 'lib-button-control',
  imports: [CommonModule, TextControlComponent],
  templateUrl: './button-control.component.html',
  styleUrl: './button-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class ButtonControlComponent {
  @Output() event = new EventEmitter<void>()

  @Input({ required: true }) model!: ButtonControlTextModel

  onClick() {
    this.event.emit()
  }
}
