import { Injectable } from '@angular/core'

import { BaseNotification } from '@vet-client/lib-utils'
import { LogoutDomainModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class LogoutNotification extends BaseNotification<LogoutDomainModel> {}
