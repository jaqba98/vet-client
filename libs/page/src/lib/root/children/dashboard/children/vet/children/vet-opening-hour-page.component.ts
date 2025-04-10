import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetOpeningHourViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-opening-hour-page',
  imports: [VetOpeningHourViewComponent],
  template: '<lib-vet-opening-hour-view></lib-vet-opening-hour-view>',
  hostDirectives: [BaseComponentDirective],
})
export class VetOpeningHourPageComponent {}
