import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowsRotate, faMagnifyingGlass, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TableNavFormModel, TableNavModel } from './table-nav-form.model';

@Component({
  selector: 'lib-table-nav-form',
  imports: [CommonModule ,BaseFormComponent],
  templateUrl: './table-nav-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableNavFormComponent extends BaseFormService<TableNavFormModel, TableNavModel> {
  @Output() event = new EventEmitter<TableNavModel>();

  constructor() {
    super({
      add: {
        id: 'add',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faPlus,
            color: 'light-primary',
            fontSize: '1rem'
          }
        },
        defaultValue: false,
        fullWidth: false,
        color: 'success'
      },
      remove: {
        id: 'remove',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faTrash,
            color: 'light-primary',
            fontSize: '1rem'
          }
        },
        defaultValue: false,
        fullWidth: false,
        color: 'error'
      },
      refresh: {
        id: 'refresh',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faArrowsRotate,
            color: 'light-primary',
            fontSize: '1rem'
          }
        },
        defaultValue: false,
        fullWidth: false,
        color: 'primary'
      },
      search: {
        id: 'search',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faMagnifyingGlass,
            color: 'light-primary',
            fontSize: '1rem'
          }
        },
        defaultValue: false,
        fullWidth: false,
        color: 'dark-secondary'
      }
    });
  }

  override onSubmit(model: TableNavModel) {
    this.event.emit(model);
  }
}
