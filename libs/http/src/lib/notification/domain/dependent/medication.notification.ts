import { Injectable } from '@angular/core'

import { DeleteDomainModel, MedicationDomainModel } from '@vet-client/lib-domain'
import { CrudNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class MedicationNotification extends CrudNotification<MedicationDomainModel, DeleteDomainModel> {
}
