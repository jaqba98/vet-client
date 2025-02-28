import { Component, EventEmitter, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-system';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { HamburgerFormDataModel, HamburgerFormModel } from './hamburger-form.model';

@Component({
  selector: 'lib-hamburger-form',
  imports: [BaseFormComponent],
  templateUrl: './hamburger-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
/** Hamburger Form */
export class HamburgerFormComponent extends BaseFormService<HamburgerFormModel, HamburgerFormDataModel> {
  @Output() event = new EventEmitter<boolean>();

  constructor() {
    super({
      hamburger: {
        id: 'hamburger',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faBars,
            color: 'icon__dark-primary'
          }
        },
        defaultValue: false
      }
    });
  }

  override onSubmit(model: HamburgerFormDataModel) {
    this.event.emit(model.hamburger);
  }
}
