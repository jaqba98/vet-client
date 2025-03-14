// done
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ClinicDomainDataReadNotification {
  private readonly notification = new BehaviorSubject<void>(undefined)

  notification$ = this.notification.asObservable()

  runNotification() {
    this.notification.next()
  }
}
