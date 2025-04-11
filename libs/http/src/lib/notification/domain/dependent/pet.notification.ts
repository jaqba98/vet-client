import { Injectable } from '@angular/core'

import { DeleteDomainModel, PetDomainModel } from '@vet-client/lib-domain'
import { CrudNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class PetNotification extends CrudNotification<PetDomainModel, DeleteDomainModel> {
}
