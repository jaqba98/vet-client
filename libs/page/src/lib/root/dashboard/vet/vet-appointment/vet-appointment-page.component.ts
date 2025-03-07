import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetAppointmentViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-appointment-page',
  imports: [VetAppointmentViewComponent],
  templateUrl: './vet-appointment-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetAppointmentPageComponent {}
