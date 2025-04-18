import { Component, OnDestroy, OnInit } from '@angular/core'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import {
  BaseFormBuilder,
  BaseFormComponent,
  BaseFormService,
} from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { LogoutDomainModel, LogoutFormModel } from '@vet-client/lib-domain'
import { LogoutNotification } from '@vet-client/lib-http'

@Component({
  selector: 'lib-logout-form',
  imports: [BaseFormComponent],
  templateUrl: './logout-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class LogoutFormComponent
  extends BaseFormService<LogoutFormModel, LogoutDomainModel>
  implements OnInit, OnDestroy {
  constructor(
    private logout: LogoutNotification,
    private baseForm: BaseFormBuilder,
  ) {
    super()
  }

  ngOnInit() {
    this.onInit('Logout', this.logout.response$)
    this.initBaseForm({
      logout: this.baseForm
        .buildButtonIcon('logout', faRightFromBracket, 'primary')
        .build(),
    })
  }

  ngOnDestroy() {
    this.onDestroy()
  }

  override onSubmit(event: LogoutDomainModel) {
    this.logout.runNotification(event)
  }
}
