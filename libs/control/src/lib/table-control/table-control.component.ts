import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TableControlModel } from './table-control.model';
import { ButtonControlComponent } from '../button-control/button-control.component';
import { ButtonControlModel } from '../button-control/button-control.model';

@Component({
  selector: 'lib-table-control',
  imports: [CommonModule, ButtonControlComponent],
  templateUrl: './table-control.component.html',
  styleUrl: './table-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TableControlComponent {
  @Input({ required: false }) model!: TableControlModel;

  readonly previewModel: ButtonControlModel = {
    id: 'edit',
    value: {
      type: 'icon',
      icon: {
        icon: faEye,
        color: 'light-primary',
        fontSize: '1rem'
      }
    },
    color: 'primary',
    fullWidth: false
  };

  readonly editModel: ButtonControlModel = {
    id: 'edit',
    value: {
      type: 'icon',
      icon: {
        icon: faEdit,
        color: 'light-primary',
        fontSize: '1rem'
      }
    },
    color: 'primary',
    fullWidth: false
  };

  readonly removeModel: ButtonControlModel = {
    id: 'remove',
    value: {
      type: 'icon',
      icon: {
        icon: faTrash,
        color: 'light-primary',
        fontSize: '1rem'
      }
    },
    color: 'error',
    fullWidth: false
  };
}
