// done
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { ClinicDomainDataModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class ClinicDomainDataCreateNotification {
  private readonly notification = new BehaviorSubject<ClinicDomainDataModel>({
    id: -1,
    isSelected: false,
    data: {
      id: -1,
      name: '',
    },
  })

  notification$ = this.notification.asObservable()

  runNotification(clinic: ClinicDomainDataModel) {
    this.notification.next(clinic)
  }
}
