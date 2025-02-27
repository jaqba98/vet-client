import { Component, Input } from '@angular/core';

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
import { ButtonControlTypeEnum } from '@vet-client/lib-control';

@Component({
  selector: 'lib-nav-options-form',
  imports: [BaseFormComponent],
  templateUrl: './nav-options-form.component.html',
  styleUrl: './nav-options-form.component.scss',
})
export class NavOptionsFormComponent extends BaseFormService<
  NavOptionsFormModel,
  NavOptionsFormDataModel
> {
  @Input() flexDirectionColumn = false;

  constructor(private readonly router: RouterService) {
    super({
      home: {
        id: 'home',
        kind: 'button',
        value: {
          type: ButtonControlTypeEnum.text,
          text: 'Home',
        },
        defaultValue: false,
      },
      aboutUs: {
        id: 'aboutUs',
        kind: 'button',
        value: {
          type: ButtonControlTypeEnum.text,
          text: 'About us',
        },
        defaultValue: false,
      },
    });
  }

  override onSubmit(model: NavOptionsFormDataModel) {
    if (model.home) {
      this.router.redirect(RouterEnum.home, 'home');
    } else if (model.aboutUs) {
      this.router.redirect(RouterEnum.home, 'about-us');
    }
  }
}
