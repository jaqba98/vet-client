import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ClientViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-clients-page',
  imports: [ClientViewComponent],
  template: '<lib-client-view></lib-client-view>',
  hostDirectives: [BaseComponentDirective],
})
export class VetClientsPageComponent {}
