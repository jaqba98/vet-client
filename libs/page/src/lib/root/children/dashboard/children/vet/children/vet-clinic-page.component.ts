import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetClinicViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-clinic-page',
  imports: [VetClinicViewComponent],
  template: '<lib-vet-clinic-view></lib-vet-clinic-view>',
  hostDirectives: [BaseComponentDirective],
})
export class VetClinicPageComponent {}
