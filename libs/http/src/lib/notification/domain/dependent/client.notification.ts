import { Injectable } from '@angular/core'

import { ClientDomainModel, DeleteDomainModel } from '@vet-client/lib-domain'
import { CrudNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class ClientNotification extends CrudNotification<ClientDomainModel, DeleteDomainModel> {
}
