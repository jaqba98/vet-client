import { Injectable } from '@angular/core'

import { DeleteDomainModel, ServiceClinicDomainModel } from '@vet-client/lib-domain'
import { CrudNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class ServiceClinicNotification extends CrudNotification<ServiceClinicDomainModel, DeleteDomainModel> {
}
