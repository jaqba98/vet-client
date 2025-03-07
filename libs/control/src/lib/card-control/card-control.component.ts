import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TextControlComponent } from '../text-control/text-control.component'
import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-card-control',
  imports: [CommonModule, TextControlComponent],
  templateUrl: './card-control.component.html',
  styleUrl: './card-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class CardControlComponent {
  @Input({ required: true }) title!: string

  @Input() width = '100%'
}
