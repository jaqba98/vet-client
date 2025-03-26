import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetEmploymentViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-employment-page',
  imports: [VetEmploymentViewComponent],
  templateUrl: './vet-employment-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetEmploymentPageComponent {}
