import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { ClinicDomainModel, DeleteDomainModel } from '@vet-client/lib-domain'
import { ResponseNotification } from '../utils/response.notification'

@Injectable({ providedIn: 'root' })
export class ClinicNotification extends ResponseNotification {
  private readonly notificationCreate = new Subject<ClinicDomainModel>()
  private readonly notificationRead = new Subject<void>()
  private readonly notificationUpdate = new Subject<ClinicDomainModel>()
  private readonly notificationDelete = new Subject<DeleteDomainModel>()

  notificationCreate$ = this.notificationCreate.asObservable()
  notificationRead$ = this.notificationRead.asObservable()
  notificationUpdate$ = this.notificationUpdate.asObservable()
  notificationDelete$ = this.notificationDelete.asObservable()

  runNotificationCreate(data: ClinicDomainModel) {
    this.notificationCreate.next(data)
  }

  runNotificationRead() {
    this.notificationRead.next()
  }

  runNotificationUpdate(data: ClinicDomainModel) {
    this.notificationUpdate.next(data)
  }

  runNotificationDelete(data: DeleteDomainModel) {
    this.notificationDelete.next(data)
  }
}
