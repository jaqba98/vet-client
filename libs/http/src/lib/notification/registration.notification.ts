import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { RegistrationDomainDataModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class RegistrationNotification {
  private readonly notification = new Subject<RegistrationDomainDataModel>()

  notification$ = this.notification.asObservable()

  runNotification(domain: RegistrationDomainDataModel) {
    this.notification.next(domain)
  }
}
