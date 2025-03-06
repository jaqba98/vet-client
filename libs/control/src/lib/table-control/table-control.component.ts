import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TableControlModel } from './table-control.model';
import { ButtonControlComponent } from '../button-control/button-control.component';
import { ButtonControlModel } from '../button-control/button-control.model';

@Component({
  selector: 'lib-table-control',
  imports: [CommonModule, ButtonControlComponent],
  templateUrl: './table-control.component.html',
  styleUrl: './table-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class TableControlComponent {
  @Input({ required: false }) model!: TableControlModel;

  readonly addButtonTextModel: ButtonControlModel = {
    id: 'add',
    value: {
      type: 'icon',
      icon: {
        icon: faPlus,
        color: 'light-primary',
        fontSize: '1rem'
      }
    },
    fullWidth: false,
    color: 'success'
  };

  readonly removeButtonTextModel: ButtonControlModel = {
    id: 'remove',
    value: {
      type: 'icon',
      icon: {
        icon: faTrash,
        color: 'light-primary',
        fontSize: '1rem'
      }
    },
    fullWidth: false,
    color: 'error'
  };
}
