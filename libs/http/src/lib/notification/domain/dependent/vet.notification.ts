import { Injectable } from '@angular/core'

import { DeleteDomainModel, VetDomainModel } from '@vet-client/lib-domain'
import { CrudNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class VetNotification extends CrudNotification<VetDomainModel, DeleteDomainModel> {
}
