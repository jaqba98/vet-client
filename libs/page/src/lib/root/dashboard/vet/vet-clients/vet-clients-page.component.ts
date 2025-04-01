import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ClientsViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-clients-page',
  imports: [ClientsViewComponent],
  templateUrl: './vet-clients-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClientsPageComponent {}
