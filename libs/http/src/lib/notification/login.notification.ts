import { Injectable } from '@angular/core'

import { LoginDomainModel } from '@vet-client/lib-domain'
import { BaseNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class LoginNotification extends BaseNotification<LoginDomainModel> {
}
