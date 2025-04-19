import { Component } from '@angular/core'

import { RouteSectionEnum } from '@vet-client/lib-store'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetInvoiceFormComponent } from '@vet-client/lib-form'
import { SectionControlComponent } from '../section-control/section-control.component'

@Component({
  selector: 'lib-vet-invoice-view',
  imports: [
    SectionControlComponent,
    VetInvoiceFormComponent,
  ],
  templateUrl: './vet-invoice-view.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetInvoiceViewComponent {
  sectionId = RouteSectionEnum.dashboardVetInvoice
}
