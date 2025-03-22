import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ClinicDomainDataCreateNotification {
  private readonly notification = new Subject<any>()

  notification$ = this.notification.asObservable()

  runNotification(clinic: any) {
    this.notification.next(clinic)
  }
}
