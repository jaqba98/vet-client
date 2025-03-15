// done
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { ClinicDomainDataModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class ClinicDomainDataUpdateNotification {
  private readonly notification = new BehaviorSubject<ClinicDomainDataModel['data']>({
    id: 0,
    name: '',
  })

  notification$ = this.notification.asObservable()

  runNotification(data: ClinicDomainDataModel['data']) {
    this.notification.next(data)
  }
}
