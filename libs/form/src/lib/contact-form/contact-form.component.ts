// done
import { Component } from '@angular/core';

import { CardControlComponent } from '@vet-client/lib-control';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-system';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ContactFormDataModel, ContactFormModel } from './contact-form.model';

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
      firstName: {
        kind: 'input',
        defaultValue: '',
        type: 'text',
        label: 'First name',
        placeholder: '',
      },
      lastName: {
        kind: 'input',
        defaultValue: '',
        type: 'text',
        label: 'Last name',
        placeholder: '',
      },
      email: {
        kind: 'input',
        defaultValue: '',
        type: 'text',
        label: 'Email',
        placeholder: '',
      },
      subject: {
        kind: 'input',
        defaultValue: '',
        type: 'text',
        label: 'Subject',
        placeholder: '',
      },
      message: {
        kind: 'input',
        defaultValue: '',
        type: 'text',
        label: 'Message',
        placeholder: '',
      },
      send: {
        kind: 'button',
        defaultValue: false,
        id: 'send',
        value: {
          type: 'text',
          text: 'Send',
        },
      },
    });
  }

  override onSubmit(model: ContactFormDataModel) {
    console.log(model);
  }
}
