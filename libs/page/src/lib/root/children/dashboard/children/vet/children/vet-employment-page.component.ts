import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetEmploymentViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-employment-page',
  imports: [VetEmploymentViewComponent],
  template: '<lib-vet-employment-view></lib-vet-employment-view>',
  hostDirectives: [BaseComponentDirective],
})
export class VetEmploymentPageComponent {}
