import { Component, Input } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { IconControlModel } from './icon-control.model'

@Component({
  selector: 'lib-icon-control',
  imports: [FontAwesomeModule],
  template: '<fa-icon [icon]="model.icon"></fa-icon>',
  hostDirectives: [BaseComponentDirective],
})
export class IconControlComponent {
  @Input({ required: true }) model!: IconControlModel
}
