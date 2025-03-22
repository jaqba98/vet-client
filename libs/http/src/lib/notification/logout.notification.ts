import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { ResponseNotification } from '@vet-client/lib-utils'
import { LogoutDomainModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class LogoutNotification extends ResponseNotification {
  private readonly notification = new Subject<LogoutDomainModel>()

  notification$ = this.notification.asObservable()

  runNotification(domain: LogoutDomainModel) {
    this.notification.next(domain)
  }
}
