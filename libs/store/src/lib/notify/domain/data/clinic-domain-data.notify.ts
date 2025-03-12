// done
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ClinicDomainDataNotify {
  private readonly notification = new BehaviorSubject<void>(undefined)

  notification$ = this.notification.asObservable()

  notify() {
    this.notification.next()
  }
}
