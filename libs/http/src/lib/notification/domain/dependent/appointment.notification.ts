import { Injectable } from '@angular/core'

import { AppointmentDomainModel, DeleteDomainModel } from '@vet-client/lib-domain'
import { CrudNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class AppointmentNotification extends CrudNotification<AppointmentDomainModel, DeleteDomainModel> {
}
