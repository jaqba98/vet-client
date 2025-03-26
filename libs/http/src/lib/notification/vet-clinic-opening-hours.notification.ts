import { Injectable } from '@angular/core'

import { DeleteDomainModel, OpeningHoursDomainModel } from '@vet-client/lib-domain'
import { CrudNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class VetClinicOpeningHoursNotification extends CrudNotification<OpeningHoursDomainModel, DeleteDomainModel> {
}
