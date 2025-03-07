import { Component, Input, OnInit } from '@angular/core';
import { faArrowsRotate, faMagnifyingGlass, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TableNavFormModel, TableNavModel } from './table-nav-form.model';

@Component({
  selector: 'lib-table-nav-form',
  imports: [BaseFormComponent],
  templateUrl: './table-nav-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class TableNavFormComponent
  extends BaseFormService<TableNavFormModel, TableNavModel>
  implements OnInit
{
  @Input() tableNavFormAddButton = true;
  @Input() tableNavFormRemoveButton = true;
  @Input() tableNavFormRefreshButton = true;
  @Input() tableNavFormSearchButton = true;

  ngOnInit() {
    this.initBaseForm({
      add: {
        id: 'add',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faPlus,
            color: 'light-primary',
            fontSize: '1rem',
          },
        },
        defaultValue: false,
        fullWidth: false,
        color: 'success',
        isEnabled: this.tableNavFormAddButton,
      },
      remove: {
        id: 'remove',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faTrash,
            color: 'light-primary',
            fontSize: '1rem',
          },
        },
        defaultValue: false,
        fullWidth: false,
        color: 'error',
        isEnabled: this.tableNavFormRemoveButton,
      },
      refresh: {
        id: 'refresh',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faArrowsRotate,
            color: 'light-primary',
            fontSize: '1rem',
          },
        },
        defaultValue: false,
        fullWidth: false,
        color: 'primary',
        isEnabled: this.tableNavFormRefreshButton,
      },
      search: {
        id: 'search',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faMagnifyingGlass,
            color: 'light-primary',
            fontSize: '1rem',
          },
        },
        defaultValue: false,
        fullWidth: false,
        color: 'dark-secondary',
        isEnabled: this.tableNavFormSearchButton,
      },
    });
  }

  override onSubmit(model: TableNavModel) {
    console.log(model);
  }
}
