import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { CardControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ContactFormModel, ContactModel } from './contact-form.model';

@Component({
  selector: 'lib-contact-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './contact-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ContactFormComponent extends BaseFormService<ContactFormModel, ContactModel> {
  constructor() {
    super({
      email: {
        kind: 'input',
        type: 'text',
        label: 'Email',
        placeholder: '',
        validators: [Validators.required, Validators.email],
        defaultValue: ''
      },
      subject: {
        kind: 'input',
        type: 'text',
        label: 'Subject',
        placeholder: '',
        validators: [Validators.required],
        defaultValue: ''
      },
      message: {
        kind: 'textarea',
        label: 'Message',
        placeholder: '',
        height: '300px',
        validators: [Validators.required],
        defaultValue: ''
      },
      send: {
        kind: 'button',
        id: 'send',
        value: {
          type: 'text',
          text: 'Send',
        },
        fullWidth: false,
        defaultValue: false
      },
    });
  }

  override onSubmit(model: ContactModel) {
    console.log(model);
  }
}
