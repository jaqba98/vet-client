import { Component } from '@angular/core';

import {
  BaseFormComponent,
  BaseFormService,
  RouterEnum,
  RouterService,
} from '@vet-client/lib-system';
import {
  NavOptionsFormDataModel,
  NavOptionsFormModel,
} from './nav-options-form.model';

@Component({
  selector: 'lib-nav-options-form',
  imports: [BaseFormComponent],
  templateUrl: './nav-options-form.component.html',
})
export class NavOptionsFormComponent extends BaseFormService<
  NavOptionsFormModel,
  NavOptionsFormDataModel
> {
  constructor(private readonly router: RouterService) {
    super({
      home: {
        id: 'home',
        kind: 'button',
        type: 'submit',
        value: {
          type: 'text',
          text: 'Home',
        },
        defaultValue: false,
      },
    });
  }

  override onSubmit(model: NavOptionsFormDataModel) {
    if (model.home) {
      this.router.redirect(RouterEnum.home);
    }
  }
}
