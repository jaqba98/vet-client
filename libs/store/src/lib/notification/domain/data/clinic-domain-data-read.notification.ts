import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ClinicDomainDataReadNotification {
  private readonly notification = new Subject<void>()

  notification$ = this.notification.asObservable()

  runNotification() {
    this.notification.next()
  }
}
