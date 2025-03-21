import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { ClinicDomainDataModel, DeleteDomainDataModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class ClinicNotification {
  private readonly notificationCreate = new Subject<ClinicDomainDataModel>()
  private readonly notificationRead = new Subject<void>()
  private readonly notificationUpdate = new Subject<ClinicDomainDataModel>()
  private readonly notificationDelete = new Subject<DeleteDomainDataModel>()

  notificationCreate$ = this.notificationCreate.asObservable()
  notificationRead$ = this.notificationRead.asObservable()
  notificationUpdate$ = this.notificationUpdate.asObservable()
  notificationDelete$ = this.notificationDelete.asObservable()

  runNotificationCreate(data: ClinicDomainDataModel) {
    this.notificationCreate.next(data)
  }

  runNotificationRead() {
    this.notificationRead.next()
  }

  runNotificationUpdate(data: ClinicDomainDataModel) {
    this.notificationUpdate.next(data)
  }

  runNotificationDelete(data: DeleteDomainDataModel) {
    this.notificationDelete.next(data)
  }
}
