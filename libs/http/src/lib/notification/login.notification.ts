import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { LoginDomainModel } from '@vet-client/lib-domain'
import { ResponseNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class LoginNotification extends ResponseNotification {
  private readonly notification = new Subject<LoginDomainModel>()

  notification$ = this.notification.asObservable()

  runNotification(data: LoginDomainModel) {
    this.notification.next(data)
  }
}
