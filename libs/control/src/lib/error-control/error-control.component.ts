import { Component } from '@angular/core'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TextControlComponent } from '../text-control/text-control.component'
import { IconControlComponent } from '../icon-control/icon-control.component'
import { IconControlModel } from '../icon-control/icon-control.model'

@Component({
  selector: 'lib-error-control',
  imports: [TextControlComponent, IconControlComponent],
  templateUrl: './error-control.component.html',
  styleUrl: './error-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class ErrorControlComponent {
  readonly model: IconControlModel = {
    icon: faCircleExclamation,
    // color: 'error',
    // fontSize: '1rem',
  }
}
