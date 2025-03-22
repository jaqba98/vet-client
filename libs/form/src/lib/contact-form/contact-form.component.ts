import { Component, OnInit } from '@angular/core'
import { Validators } from '@angular/forms'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { CardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ContactFormModel, ContactModel } from './contact-form.model'

@Component({
  selector: 'lib-contact-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './contact-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ContactFormComponent extends BaseFormService<ContactFormModel, ContactModel> implements OnInit {
  constructor(private baseForm: BaseFormBuilder) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      email: this.baseForm
        .buildInput('text', 'Email')
        .buildValidators([Validators.required, Validators.email])
        .build(),
      subject: this.baseForm
        .buildInput('text', 'Subject')
        .buildValidators([Validators.required])
        .build(),
      message: this.baseForm
        .buildTextarea('Message', '300px')
        .buildValidators([Validators.required])
        .build(),
    })
  }

  override onSubmit(model: ContactModel) {
    console.log(model)
  }
}
