import { Component, OnDestroy, OnInit } from '@angular/core'

import { BaseFormBuilder, BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { CardControlComponent } from '@vet-client/lib-control'
import { ChooseRoleDomainModel, ChooseRoleFormModel } from '@vet-client/lib-domain'
import { BaseComponentDirective } from '@vet-client/lib-utils'
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
      role: this.baseForm
        .buildRadioButton('role', [
          { label: 'Vet', value: 'vet' },
          { label: 'Client', value: 'client' },
        ])
        .build(),
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  override onSubmit(domain: ChooseRoleDomainModel) {
    this.chooseRole.runNotification(domain)
  }
}
