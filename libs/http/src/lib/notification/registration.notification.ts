import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { RegistrationDomainModel } from '@vet-client/lib-domain'
import { ResponseNotification } from '../utils/response.notification'

@Injectable({ providedIn: 'root' })
export class RegistrationNotification extends ResponseNotification {
  private readonly notification = new Subject<RegistrationDomainModel>()

  notification$ = this.notification.asObservable()

  runNotification(domain: RegistrationDomainModel) {
    this.notification.next(domain)
  }
}
