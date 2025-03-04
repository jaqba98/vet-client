import { Component } from '@angular/core';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import {
  VetMenuFormModel, VetMenuModel
} from './vet-menu-form.model';

@Component({
  selector: 'lib-vet-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './vet-menu-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class VetMenuFormComponent extends BaseFormService<VetMenuFormModel, VetMenuModel> {
  constructor() {
    super({
      vet1: {
        id: 'home',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Vet1'
        },
        defaultValue: false,
        fullWidth: true
      },
      vet2: {
        id: 'home',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Vet2'
        },
        defaultValue: false,
        fullWidth: true
      },
      vet3: {
        id: 'home',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Vet3'
        },
        defaultValue: false,
        fullWidth: true
      },
      vet4: {
        id: 'home',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Vet4'
        },
        defaultValue: false,
        fullWidth: true
      }
    });
  }

  override onSubmit(model: VetMenuModel) {
    console.log(model);
  }
}
