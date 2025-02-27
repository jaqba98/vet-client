import { Component } from '@angular/core';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-system';
import {
  ButtonControlTypeEnum,
  CardControlComponent,
  InputControlTypeEnum,
} from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ContactFormDataModel, ContactFormModel } from './contact-form.model';

@Component({
  selector: 'lib-contact-form',
  imports: [BaseFormComponent, CardControlComponent],
  templateUrl: './contact-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ContactFormComponent extends BaseFormService<ContactFormModel, ContactFormDataModel> {
  constructor() {
    super({
      email: {
        kind: 'input',
        type: InputControlTypeEnum.text,
        label: 'Email',
        placeholder: '',
        defaultValue: '',
      },
      password: {
        kind: 'input',
        type: InputControlTypeEnum.password,
        label: 'Password',
        placeholder: '',
        defaultValue: '',
      },
      forgotPassword: {
        id: 'forgotPassword',
        kind: 'button',
        value: {
          type: ButtonControlTypeEnum.link,
          text: 'Forgot your password?',
          tip: "",
        },
        defaultValue: false,
      },
      login: {
        id: 'login',
        kind: 'button',
        value: {
          type: ButtonControlTypeEnum.text,
          text: 'Login',
        },
        defaultValue: false,
      },
      registration: {
        id: 'registration',
        kind: 'button',
        value: {
          type: ButtonControlTypeEnum.link,
          text: "Don't have an account?",
          tip: "",
        },
        defaultValue: false,
      },
    });
  }

  override onSubmit(model: ContactFormDataModel) {
    console.log(model);
  }
}
