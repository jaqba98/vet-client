import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-table-panel-control',
  imports: [CommonModule],
  templateUrl: './table-panel-control.component.html',
  styleUrl: './table-panel-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TablePanelControlComponent {
  @Input() isPaginator = true
}
