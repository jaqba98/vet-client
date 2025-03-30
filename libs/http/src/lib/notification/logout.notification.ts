import { Injectable } from '@angular/core'

import { BaseNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class LogoutNotification extends BaseNotification<void> {
}
