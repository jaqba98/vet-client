import { Injectable } from '@angular/core'

import { DeleteDomainModel, MedicalRecordDomainModel } from '@vet-client/lib-domain'
import { CrudNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class MedicalRecordNotification extends CrudNotification<MedicalRecordDomainModel, DeleteDomainModel> {
}
