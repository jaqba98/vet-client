import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetClinicViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-clinic-page',
  imports: [VetClinicViewComponent],
  templateUrl: './vet-clinic-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicPageComponent {}
