import { Component } from '@angular/core'

import { ChooseRoleViewComponent } from '@vet-client/lib-view'
import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-choose-role-page',
  imports: [ChooseRoleViewComponent],
  templateUrl: './choose-role-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ChooseRolePageComponent {}
