import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TableControlComponent } from '@vet-client/lib-control';

@Component({
  selector: 'lib-table-form',
  imports: [TableControlComponent],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class TableFormComponent {}
