import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
  constructor() {
    super();
  }

  ngOnInit() {
    this.initBaseForm({
      add: {
        kind: 'button',
        id: 'add',
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
    });
  }

  override onSubmit(model: TableNavModel) {
    console.log(model);
  }
}
