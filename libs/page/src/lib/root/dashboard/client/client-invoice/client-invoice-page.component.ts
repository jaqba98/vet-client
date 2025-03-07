import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ClientInvoiceViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-client-invoice-page',
  imports: [ClientInvoiceViewComponent],
  templateUrl: './client-invoice-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientInvoicePageComponent {}
