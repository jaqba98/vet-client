import { Injectable } from '@angular/core'

import { DeleteDomainModel, OpeningHourDomainModel } from '@vet-client/lib-domain'
import { CrudNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class OpeningHourNotification extends CrudNotification<OpeningHourDomainModel, DeleteDomainModel> {
}
