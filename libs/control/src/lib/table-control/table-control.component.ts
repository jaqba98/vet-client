import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-table-control',
  templateUrl: './table-control.component.html',
  styleUrl: './table-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class TableControlComponent {}
