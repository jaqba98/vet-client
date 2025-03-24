import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetServiceViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-services-page',
  imports: [VetServiceViewComponent],
  templateUrl: './vet-services-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetServicesPageComponent {}
