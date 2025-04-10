import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetMedicationViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-medication-page',
  imports: [VetMedicationViewComponent],
  template: '<lib-vet-medication-view></lib-vet-medication-view>',
  hostDirectives: [BaseComponentDirective],
})
export class VetMedicationPageComponent {}
