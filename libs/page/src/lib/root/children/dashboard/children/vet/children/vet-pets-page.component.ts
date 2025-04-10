import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetPetsViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-pets-page',
  imports: [VetPetsViewComponent],
  template: '<lib-vet-pets-view></lib-vet-pets-view>',
  hostDirectives: [BaseComponentDirective],
})
export class VetPetsPageComponent {}
