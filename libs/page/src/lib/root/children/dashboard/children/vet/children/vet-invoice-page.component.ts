import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetInvoiceViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-invoice-page',
  imports: [VetInvoiceViewComponent],
  template: '<lib-vet-invoice-view></lib-vet-invoice-view>',
  hostDirectives: [BaseComponentDirective],
})
export class VetInvoicePageComponent {}
