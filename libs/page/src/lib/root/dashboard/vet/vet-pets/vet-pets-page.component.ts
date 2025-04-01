import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetPetsViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-pets-page',
  imports: [VetPetsViewComponent],
  templateUrl: './vet-pets-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetPetsPageComponent {}
