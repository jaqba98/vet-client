import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-table-data-form',
  imports: [CommonModule],
  templateUrl: './table-data-form.component.html',
  styleUrl: './table-data-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableDataFormComponent {
}
