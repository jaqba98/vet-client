import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ProfileViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-profile-page',
  imports: [ProfileViewComponent],
  template: '<lib-profile-view></lib-profile-view>',
  hostDirectives: [BaseComponentDirective],
})
export class ProfilePageComponent {}
