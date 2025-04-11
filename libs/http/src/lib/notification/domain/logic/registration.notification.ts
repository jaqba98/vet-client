import { Injectable } from '@angular/core'

import { RegistrationDomainModel } from '@vet-client/lib-domain'
import { BaseNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class RegistrationNotification extends BaseNotification<RegistrationDomainModel> {
}
