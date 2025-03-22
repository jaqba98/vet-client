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
  private readonly sub: Subscription

  title = 'Choose role'

  constructor(private chooseRole: ChooseRoleNotification) {
    super()
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.initBaseForm({
      role: BaseFormBuilder.buildRadioButton(['vet', 'client'], 'vet'),
    })
    this.sub.add(this.chooseRole.response$.subscribe((res) => {
      this.success = ''
      this.error = ''
      if (res.success) {
        this.success = res.message
      }
      else {
        this.error = res.message
      }
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  override onSubmit(domain: ChooseRoleDomainModel) {
    this.chooseRole.runNotification(domain)
  }
}
