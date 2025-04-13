import { Component, EventEmitter, Output } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-button-control',
  templateUrl: './button-control.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ButtonControlComponent {
  @Output() event = new EventEmitter<boolean>()

  onClick() {
    this.event.emit()
  }
}
