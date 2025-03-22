import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { ChooseRoleDomainModel } from '@vet-client/lib-domain'
import { ResponseNotification } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class ChooseRoleNotification extends ResponseNotification {
  private readonly notification = new Subject<ChooseRoleDomainModel>()

  notification$ = this.notification.asObservable()

  runNotification(data: ChooseRoleDomainModel) {
    this.notification.next(data)
  }
}
