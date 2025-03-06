import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TableControlModel } from './table-control.model';

@Component({
  selector: 'lib-table-control',
  imports: [CommonModule],
  templateUrl: './table-control.component.html',
  styleUrl: './table-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class TableControlComponent {
  @Input({ required: false }) model!: TableControlModel;
}
