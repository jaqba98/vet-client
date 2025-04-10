import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetSettingsViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-settings-page',
  imports: [VetSettingsViewComponent],
  template: '<lib-vet-settings-view></lib-vet-settings-view>',
  hostDirectives: [BaseComponentDirective],
})
export class VetSettingsPageComponent {}
