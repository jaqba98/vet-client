import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetClinicOpeningHoursFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-vet-clinic-opening-hours-page',
  imports: [VetClinicOpeningHoursFormComponent],
  templateUrl: './vet-clinic-opening-hours-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicOpeningHoursPageComponent {}
