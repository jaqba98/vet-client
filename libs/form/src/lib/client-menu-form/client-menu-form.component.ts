import { Component } from '@angular/core';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import {
  ClientMenuFormModel,
  ClientMenuModel
} from './client-menu-form.model';

@Component({
  selector: 'lib-client-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './client-menu-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ClientMenuFormComponent extends BaseFormService<ClientMenuFormModel, ClientMenuModel> {
  constructor() {
    super({
      client1: {
        id: 'home',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Client1'
        },
        defaultValue: false,
        fullWidth: true
      },
      client2: {
        id: 'home',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Client2'
        },
        defaultValue: false,
        fullWidth: true
      },
      client3: {
        id: 'home',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Client3'
        },
        defaultValue: false,
        fullWidth: true
      },
      client4: {
        id: 'home',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Client4'
        },
        defaultValue: false,
        fullWidth: true
      }
    });
  }

  override onSubmit(model: ClientMenuModel) {
    console.log(model);
  }
}
