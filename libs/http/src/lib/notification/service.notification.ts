import { Injectable } from '@angular/core'

import { DeleteDomainModel, ServiceDomainModel } from '@vet-client/lib-domain'
import { CrudNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class ServiceNotification extends CrudNotification<ServiceDomainModel, DeleteDomainModel> {
}
