import { Component } from '@angular/core'

import { SectionControlComponent } from '@vet-client/lib-control'
import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'

@Component({
  selector: 'lib-client-invoice-view',
  imports: [SectionControlComponent],
  templateUrl: './client-invoice-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientInvoiceViewComponent {
  sectionId = RouteSectionEnum.dashboardClientInvoice
}
