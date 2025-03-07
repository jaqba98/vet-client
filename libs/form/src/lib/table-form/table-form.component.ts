import { Component, Input } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TableControlComponent } from '@vet-client/lib-control'
import { TableNavFormComponent } from './table-nav-form/table-nav-form.component'

@Component({
  selector: 'lib-table-form',
  imports: [TableControlComponent, TableNavFormComponent],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableFormComponent {
  @Input() tableNavFormAddButton = true
  @Input() tableNavFormRemoveButton = true
  @Input() tableNavFormRefreshButton = true
  @Input() tableNavFormSearchButton = true
}
