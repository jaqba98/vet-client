import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TextControlComponent } from '../text-control/text-control.component'
import { ButtonControlModel } from './button-control.model'
import { IconControlComponent } from '../icon-control/icon-control.component'

@Component({
  selector: 'lib-button-control',
  imports: [CommonModule, TextControlComponent, IconControlComponent],
  templateUrl: './button-control.component.html',
  styleUrl: './button-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class ButtonControlComponent {
  @Output() event = new EventEmitter<void>()

  @Input({ required: true }) model!: ButtonControlModel

  onClick() {
    this.event.emit()
  }
}
