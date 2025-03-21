import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { LoginDomainDataModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class LoginNotification {
  private readonly notification = new Subject<LoginDomainDataModel>()

  notification$ = this.notification.asObservable()

  runNotification(data: LoginDomainDataModel) {
    this.notification.next(data)
  }
}
