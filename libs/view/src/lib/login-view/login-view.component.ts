import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { LoginFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-login-view',
  imports: [SectionControlComponent, LoginFormComponent],
  templateUrl: './login-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class LoginViewComponent {
  sectionId = RouteSectionEnum.login
}
