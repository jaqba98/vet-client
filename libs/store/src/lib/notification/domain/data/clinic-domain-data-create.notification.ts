// done
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { ClinicDomainDataInternalModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class ClinicDomainDataCreateNotification {
  private readonly notification = new BehaviorSubject<ClinicDomainDataInternalModel>({ name: '' })

  notification$ = this.notification.asObservable()

  runNotification(clinic: ClinicDomainDataInternalModel) {
    this.notification.next(clinic)
  }
}
