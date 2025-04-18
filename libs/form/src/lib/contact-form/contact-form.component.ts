import { Component, OnDestroy, OnInit } from '@angular/core'

import { CardControlComponent } from '@vet-client/lib-control'
import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ContactFormModel, ContactLogicModel } from '@vet-client/lib-domain'
import { Validators } from '@angular/forms'

@Component({
  selector: 'lib-contact-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './contact-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ContactFormComponent
  extends BaseFormService<ContactFormModel, ContactLogicModel>
  implements OnInit, OnDestroy {
  constructor(private baseForm: BaseFormBuilder) {
    super()
  }

  ngOnInit() {
    this.onInit('Contact')
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

  ngOnDestroy() {
    this.onDestroy()
  }

  override onSubmit(domain: ContactLogicModel) {
    console.log(domain)
  }
}
