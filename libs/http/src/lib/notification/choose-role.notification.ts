import { Injectable } from '@angular/core'

import { ChooseRoleDomainModel } from '@vet-client/lib-domain'
import { BaseNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class ChooseRoleNotification extends BaseNotification<ChooseRoleDomainModel> {
}
