import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-table-form',
  imports: [CommonModule],
  templateUrl: './table-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class TableFormComponent {}
