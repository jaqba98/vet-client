import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-table-panel-control',
  templateUrl: './table-panel-control.component.html',
  styleUrl: './table-panel-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TablePanelControlComponent {}
