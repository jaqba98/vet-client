import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class IsClientNotification {
  private readonly notification = new Subject<void>()

  notification$ = this.notification.asObservable()

  runNotification() {
    this.notification.next()
  }
}
