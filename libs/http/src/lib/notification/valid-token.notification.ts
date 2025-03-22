import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { ResponseNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class ValidTokenNotification extends ResponseNotification {
  private readonly notification = new Subject<void>()

  notification$ = this.notification.asObservable()

  runNotification() {
    this.notification.next()
  }
}
