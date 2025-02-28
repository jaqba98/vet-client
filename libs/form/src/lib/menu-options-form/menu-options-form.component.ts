// done
import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  BaseFormComponent,
  BaseFormService,
  RouterEnum,
  RouterService,
} from '@vet-client/lib-system';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { MenuOptionsFormDataModel, MenuOptionsFormModel } from './menu-options-form.model';

@Component({
  selector: 'lib-menu-options-form',
  imports: [BaseFormComponent],
  templateUrl: './menu-options-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class MenuOptionsFormComponent extends BaseFormService<MenuOptionsFormModel, MenuOptionsFormDataModel> {
  @Output() event = new EventEmitter();

  @Input() flexDirectionColumn = false;

  constructor(private readonly router: RouterService) {
    super({
      home: {
        id: 'home',
        kind: 'button',
        value: { type: 'text', text: 'Home' },
        defaultValue: false,
        fullWidth: false
      },
      aboutUs: {
        id: 'aboutUs',
        kind: 'button',
        value: { type: 'text', text: 'About us' },
        defaultValue: false,
        fullWidth: false
      },
      price: {
        id: 'price',
        kind: 'button',
        value: { type: 'text', text: 'Price' },
        defaultValue: false,
        fullWidth: false
      },
      contact: {
        id: 'contact',
        kind: 'button',
        value: { type: 'text', text: 'Contact' },
        defaultValue: false,
        fullWidth: false
      }
    });
  }

  override onSubmit(model: MenuOptionsFormDataModel) {
    if (model.home) {
      this.router.redirect(RouterEnum.home, 'home');
    } else if (model.aboutUs) {
      this.router.redirect(RouterEnum.home, 'about-us');
    } else if (model.price) {
      this.router.redirect(RouterEnum.home, 'price');
    } else if (model.contact) {
      this.router.redirect(RouterEnum.home, 'contact');
    }
    this.event.emit();
  }
}
