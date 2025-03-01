// done
import { Component, EventEmitter, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { HamburgerFormDataModel, HamburgerFormModel } from './hamburger-form.model';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';

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
          type: 'icon',
          icon: {
            icon: faBars,
            color: 'icon__light-primary'
          }
        },
        defaultValue: false,
        fullWidth: false
      }
    });
  }

  override onSubmit(model: HamburgerFormDataModel) {
    this.event.emit(model.hamburger);
  }
}
