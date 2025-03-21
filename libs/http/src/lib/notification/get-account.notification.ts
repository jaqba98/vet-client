import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { ResponseNotification } from '../utils/response.notification'

@Injectable({ providedIn: 'root' })
export class GetAccountNotification extends ResponseNotification {
  private readonly notification = new Subject<void>()

  notification$ = this.notification.asObservable()

  runNotification() {
    this.notification.next()
  }
}
