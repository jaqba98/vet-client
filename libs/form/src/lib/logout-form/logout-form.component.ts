import { Component } from '@angular/core'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { LogoutFormModel } from '@vet-client/lib-domain'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { LogoutNotification } from '@vet-client/lib-http'

@Component({
  selector: 'lib-logout-form',
  imports: [BaseFormComponent],
  templateUrl: './logout-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class LogoutFormComponent extends BaseFormService<LogoutFormModel, void> {
  constructor(private logout: LogoutNotification) {
    super()
  }

  override onSubmit() {
    this.logout.runNotification()
  }
}
