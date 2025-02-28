// done
import { Component } from '@angular/core';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-system';
import { LogoutFormDataModel, LogoutFormModel } from './logout-form.model';
import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-logout-form',
  imports: [BaseFormComponent],
  templateUrl: './logout-form.component.html',
  styleUrl: './logout-form.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class LogoutFormComponent extends BaseFormService<LogoutFormModel, LogoutFormDataModel> {
  constructor() {
    super({
      logout: {
        id: 'logout',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Logout',
        },
        defaultValue: false,
        fullWidth: false
      },
    });
  }

  override onSubmit(model: LogoutFormDataModel) {
    console.log(model);
  }
}
