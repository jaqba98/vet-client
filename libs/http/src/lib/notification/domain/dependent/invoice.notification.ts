import { Injectable } from '@angular/core'

import { DeleteDomainModel, InvoiceDomainModel } from '@vet-client/lib-domain'
import { CrudNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class InvoiceNotification extends CrudNotification<InvoiceDomainModel, DeleteDomainModel> {
}
