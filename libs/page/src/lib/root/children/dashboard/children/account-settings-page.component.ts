import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { AccountSettingsViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-account-settings-page',
  imports: [AccountSettingsViewComponent],
  template: '<lib-account-settings-view></lib-account-settings-view>',
  hostDirectives: [BaseComponentDirective],
})
export class AccountSettingsPageComponent {}
