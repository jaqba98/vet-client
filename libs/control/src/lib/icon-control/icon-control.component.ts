import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { IconControlClassListModel, IconControlModel } from './icon-control.model'

@Component({
  selector: 'lib-icon-control',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './icon-control.component.html',
  styleUrl: './icon-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class IconControlComponent {
  @Input({ required: true }) model!: IconControlModel

  getClassList(): IconControlClassListModel {
    return {
      'icon-control--dark-primary': this.model.color === 'dark-primary',
      'icon-control--dark-secondary': this.model.color === 'dark-secondary',
      'icon-control--light-primary': this.model.color === 'light-primary',
      'icon-control--primary': this.model.color === 'primary',
      'icon-control--error': this.model.color === 'error',
      'icon-control--success': this.model.color === 'success',
    }
  }
}
