import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TextControlComponent } from '../text-control/text-control.component'

@Component({
  selector: 'lib-table-card-control',
  imports: [CommonModule, TextControlComponent],
  templateUrl: './table-card-control.component.html',
  styleUrl: './table-card-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableCardControlComponent {
  @Input({ required: true }) title!: string

  @Input() width = '100%'
}
