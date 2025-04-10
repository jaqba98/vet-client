import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetServiceClinicViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-services-page',
  imports: [VetServiceClinicViewComponent],
  template: '<lib-vet-service-clinic-view></lib-vet-service-clinic-view>',
  hostDirectives: [BaseComponentDirective],
})
export class VetServiceClinicPageComponent {}
