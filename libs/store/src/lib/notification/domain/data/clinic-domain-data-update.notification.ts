import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ClinicDomainDataUpdateNotification {
  private readonly notification = new Subject<any>()

  notification$ = this.notification.asObservable()

  runNotification(data: any) {
    this.notification.next(data)
  }
}
