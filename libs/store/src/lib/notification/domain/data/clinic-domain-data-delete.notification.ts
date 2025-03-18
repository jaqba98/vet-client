import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ClinicDomainDataDeleteNotification {
  private readonly notification = new Subject<number[]>()

  notification$ = this.notification.asObservable()

  runNotification(ids: number[]) {
    this.notification.next(ids)
  }
}
