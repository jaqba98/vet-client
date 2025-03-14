// done
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ClinicDomainDataDeleteNotification {
  private readonly notification = new BehaviorSubject<number[]>([])

  notification$ = this.notification.asObservable()

  runNotification(ids: number[]) {
    this.notification.next(ids)
  }
}
