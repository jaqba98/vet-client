import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ClientClinicsViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-client-clinics-page',
  imports: [ClientClinicsViewComponent],
  templateUrl: './client-clinics-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientClinicsPageComponent {}
