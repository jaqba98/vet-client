// done
import { Component } from '@angular/core';

import { CardControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ContactFormDataModel, ContactFormModel } from './contact-form.model';
import { Validators } from '@angular/forms';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';

@Component({
  selector: 'lib-contact-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './contact-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ContactFormComponent extends BaseFormService<
  ContactFormModel,
  ContactFormDataModel
> {
  constructor() {
    super({
      email: {
        kind: 'input',
        defaultValue: '',
        type: 'text',
        label: 'Email',
        placeholder: '',
        validators: [Validators.required, Validators.email]
      },
      subject: {
        kind: 'input',
        defaultValue: '',
        type: 'text',
        label: 'Subject',
        placeholder: '',
        validators: [Validators.required]
      },
      message: {
        kind: 'textarea',
        defaultValue: '',
        label: 'Message',
        placeholder: '',
        height: '300px',
        validators: [Validators.required]
      },
      send: {
        kind: 'button',
        defaultValue: false,
        id: 'send',
        value: {
          type: 'text',
          text: 'Send',
        },
        fullWidth: false
      },
    });
  }

  override onSubmit(model: ContactFormDataModel) {
    console.log(model);
  }
}
