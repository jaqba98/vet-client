import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { ClinicDomainDataModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class ClinicDomainDataUpdateNotification {
  private readonly notification = new Subject<ClinicDomainDataModel['data']>()

  notification$ = this.notification.asObservable()

  runNotification(data: ClinicDomainDataModel['data']) {
    this.notification.next(data)
  }
}
