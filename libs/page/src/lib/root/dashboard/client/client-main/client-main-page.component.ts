import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ClientViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-client-main-page',
  imports: [ClientViewComponent],
  templateUrl: './client-main-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientMainPageComponent {}
