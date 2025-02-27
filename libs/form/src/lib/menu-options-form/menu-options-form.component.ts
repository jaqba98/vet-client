import { Component, Input } from '@angular/core';

import {
  BaseFormComponent,
  BaseFormService,
  RouterEnum,
  RouterService,
} from '@vet-client/lib-system';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { MenuOptionsFormDataModel, MenuOptionsFormModel } from './menu-options-form.model';
import { ButtonControlTypeEnum } from '@vet-client/lib-control';

@Component({
  selector: 'lib-menu-options-form',
  imports: [BaseFormComponent],
  templateUrl: './menu-options-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
/** Hamburger Form */
export class MenuOptionsFormComponent extends BaseFormService<MenuOptionsFormModel, MenuOptionsFormDataModel> {
  @Input() flexDirectionColumn = false;

  constructor(private readonly router: RouterService) {
    super({
      home: {
        id: 'home',
        kind: 'button',
        value: { type: ButtonControlTypeEnum.text, text: 'Home' },
        defaultValue: false,
      },
      aboutUs: {
        id: 'aboutUs',
        kind: 'button',
        value: { type: ButtonControlTypeEnum.text, text: 'About us' },
        defaultValue: false,
      },
    });
  }

  override onSubmit(model: MenuOptionsFormDataModel) {
    if (model.home) {
      this.router.redirect(RouterEnum.home, 'home');
      return;
    }
    if (model.aboutUs) {
      this.router.redirect(RouterEnum.home, 'about-us');
      return;
    }
  }
}
