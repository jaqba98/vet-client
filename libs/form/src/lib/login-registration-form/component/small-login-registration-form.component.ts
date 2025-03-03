import { Component } from '@angular/core';
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { BaseLoginRegistrationFormModel, BaseLoginRegistrationModel } from '../base/base-login-registration-form.model';
import { BaseLoginRegistrationFormService } from '../base/base-login-registration-form.service';

@Component({
  selector: 'lib-small-login-registration-form',
  imports: [CommonModule, BaseFormComponent],
  templateUrl: '../base/base-login-registration-form.component.html',
  styleUrl: '../base/base-login-registration-form.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class SmallLoginRegistrationFormComponent extends BaseFormService<
  BaseLoginRegistrationFormModel,
  BaseLoginRegistrationModel
> {
  loginRegistrationFormClass = 'base-login-registration-form--small';

  constructor(private readonly baseLoginRegistrationForm: BaseLoginRegistrationFormService) {
    super({
      login: {
        id: 'login',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faRightToBracket,
            color: 'light-primary',
            fontSize: '1rem'
          }
        },
        defaultValue: false,
        fullWidth: false
      },
      registration: {
        id: 'registration',
        kind: 'button',
        value: {
          type: 'icon',
          icon: {
            icon: faUserPlus,
            color: 'light-primary',
            fontSize: '1rem'
          }
        },
        defaultValue: false,
        fullWidth: false
      },
    });
  }

  override onSubmit(model: BaseLoginRegistrationModel) {
    this.baseLoginRegistrationForm.onSubmit(model);
  }
}
