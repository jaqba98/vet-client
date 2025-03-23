import { Injectable } from '@angular/core'

import { ClinicDomainModel, DeleteDomainModel } from '@vet-client/lib-domain'
import { CrudNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class ClinicNotification extends CrudNotification<ClinicDomainModel, DeleteDomainModel> {
}
