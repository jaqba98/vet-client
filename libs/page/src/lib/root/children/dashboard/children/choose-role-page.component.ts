import { Component } from '@angular/core'

import { ChooseRoleViewComponent } from '@vet-client/lib-view'
import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-choose-role-page',
  imports: [ChooseRoleViewComponent],
  template: '<lib-choose-role-view></lib-choose-role-view>',
  hostDirectives: [BaseComponentDirective],
})
export class ChooseRolePageComponent {}
