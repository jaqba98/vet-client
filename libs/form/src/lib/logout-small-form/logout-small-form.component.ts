// done
import { Component } from '@angular/core';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-system';
import { LogoutSmallFormDataModel, LogoutSmallFormModel } from './logout-small-form.model';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-logout-small-form',
  imports: [BaseFormComponent],
  templateUrl: './logout-small-form.component.html',
  styleUrl: './logout-small-form.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class LogoutSmallFormComponent extends BaseFormService<LogoutSmallFormModel, LogoutSmallFormDataModel> {
  constructor() {
    super({
      logout: {
        id: 'logout',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faRightFromBracket,
            color: 'icon__light-primary'
          }
        },
        defaultValue: false,
        fullWidth: false
      },
    });
  }

  override onSubmit(model: LogoutSmallFormDataModel) {
    console.log(model);
  }
}
