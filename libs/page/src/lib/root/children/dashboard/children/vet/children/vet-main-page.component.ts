import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetMainViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-main-page',
  imports: [VetMainViewComponent],
  template: '<lib-vet-main-view></lib-vet-main-view>',
  hostDirectives: [BaseComponentDirective],
})
export class VetMainPageComponent {}
