import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ClientPetsViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-client-pets-page',
  imports: [ClientPetsViewComponent],
  templateUrl: './client-pets-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientPetsPageComponent {}
