import { Injectable } from '@angular/core'

import { DeleteDomainModel, EmploymentDomainModel } from '@vet-client/lib-domain'
import { CrudNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class EmploymentNotification extends CrudNotification<EmploymentDomainModel, DeleteDomainModel> {
}
