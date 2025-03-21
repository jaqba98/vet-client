import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { ChooseRoleDomainDataModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class ChooseRoleNotification {
  private readonly notification = new Subject<ChooseRoleDomainDataModel>()

  notification$ = this.notification.asObservable()

  runNotification(data: ChooseRoleDomainDataModel) {
    this.notification.next(data)
  }
}
