import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-system';
import { CardControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ChooseRoleFormDataModel, ChooseRoleFormModel } from './choose-role-form.model';

@Component({
  selector: 'lib-choose-role-form',
  imports: [CommonModule ,BaseFormComponent, CardControlComponent],
  templateUrl: './choose-role-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ChooseRoleFormComponent extends BaseFormService<ChooseRoleFormModel, ChooseRoleFormDataModel> {
  constructor() {
    super({
      role: {
        kind: 'radio-button',
        name: 'role',
        options: [
          { id: 'vet', value: 'Vet' },
          { id: 'client', value: 'Client' }
        ],
        defaultValue: 'vet',
        validators: [],
      },
      save: {
        kind: 'button',
        defaultValue: false,
        id: 'save',
        value: {
          type: 'text',
          text: 'Save',
        },
        fullWidth: false
      },
    });
  }

  override onSubmit(model: ChooseRoleFormDataModel) {
    console.log(model);
  }
}
