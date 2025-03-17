import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { RegistrationDomainDataModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class RegistrationDomainDataNotification {
  private readonly notification = new Subject<RegistrationDomainDataModel>()

  notification$ = this.notification.asObservable()

  runNotification(data: RegistrationDomainDataModel) {
    this.notification.next(data)
  }
}
