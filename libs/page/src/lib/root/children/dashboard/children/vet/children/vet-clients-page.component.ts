import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ClientsViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-clients-page',
  imports: [ClientsViewComponent],
  template: '<lib-clients-view></lib-clients-view>',
  hostDirectives: [BaseComponentDirective],
})
export class VetClientsPageComponent {}
