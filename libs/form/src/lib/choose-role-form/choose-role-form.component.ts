import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { CardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ChooseRoleDomainModel, ChooseRoleFormModel } from '@vet-client/lib-domain'
import { ChooseRoleNotification } from '@vet-client/lib-http'

@Component({
  selector: 'lib-choose-role-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './choose-role-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ChooseRoleFormComponent
  extends BaseFormService<ChooseRoleFormModel, ChooseRoleDomainModel>
  implements OnInit, OnDestroy {
  constructor(
    private chooseRole: ChooseRoleNotification,
    private baseForm: BaseFormBuilder,
  ) {
    super('Choose role', chooseRole)
  }

  ngOnInit() {
    this.initBaseForm({
      role: this.baseForm.buildRadioButton('vet', ['vet', 'client']).build(),
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  override onSubmit(domain: ChooseRoleDomainModel) {
    this.chooseRole.runNotification(domain)
  }
}
