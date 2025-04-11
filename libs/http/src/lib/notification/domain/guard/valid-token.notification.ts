import { Injectable } from '@angular/core'

import { BaseNotification } from '@vet-client/lib-utils'
import { ValidTokenDomainModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class ValidTokenNotification extends BaseNotification<ValidTokenDomainModel> {
}
