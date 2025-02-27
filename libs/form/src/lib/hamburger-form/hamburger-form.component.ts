import { Component, EventEmitter, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-system';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ButtonControlTypeEnum } from '@vet-client/lib-control';
import { HamburgerFormDataModel, HamburgerFormModel } from './hamburger-form.model';

@Component({
  selector: 'lib-hamburger-form',
  imports: [BaseFormComponent],
  templateUrl: './hamburger-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class HamburgerFormComponent extends BaseFormService<HamburgerFormModel, HamburgerFormDataModel> {
  @Output() event = new EventEmitter<boolean>();

  constructor() {
    super({
      hamburger: {
        id: 'hamburger',
        kind: 'button',
        value: {
          type: ButtonControlTypeEnum.icon,
          icon: {
            icon: faBars
          }
        },
        defaultValue: false,
      }
    });
  }

  override onSubmit(model: HamburgerFormDataModel) {
    this.event.emit(model.hamburger);
  }
}
