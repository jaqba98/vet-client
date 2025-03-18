import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { ClinicDomainDataInternalModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class ClinicDomainDataCreateNotification {
  private readonly notification = new Subject<ClinicDomainDataInternalModel>()

  notification$ = this.notification.asObservable()

  runNotification(clinic: ClinicDomainDataInternalModel) {
    this.notification.next(clinic)
  }
}
