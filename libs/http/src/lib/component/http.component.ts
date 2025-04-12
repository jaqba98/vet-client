import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription, switchMap } from 'rxjs'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ChooseRoleNotification } from '../notification/domain/logic/choose-role.notification'
import { ClinicNotification } from '../notification/domain/independent/clinic.notification'
import { LoginNotification } from '../notification/domain/logic/login.notification'
import { LogoutNotification } from '../notification/domain/logic/logout.notification'
import { RegistrationNotification } from '../notification/domain/logic/registration.notification'
import { ValidTokenNotification } from '../notification/domain/guard/valid-token.notification'
import { HttpPostAppService } from '../app-service/http-post-app.service'
import { ServiceClinicNotification } from '../notification/domain/dependent/service-clinic.notification'
import { EmploymentNotification } from '../notification/domain/dependent/employment.notification'
import { OpeningHourNotification } from '../notification/domain/dependent/opening-hour.notification'
import { MedicationNotification } from '../notification/domain/dependent/medication.notification'
import { ClientNotification } from '../notification/domain/dependent/client.notification'
import { PetNotification } from '../notification/domain/dependent/pet.notification'
import { AppointmentNotification } from '../notification/domain/dependent/appointment.notification'
import { InvoiceNotification } from '../notification/domain/dependent/invoice.notification'
import { MedicalRecordNotification } from '../notification/domain/dependent/medical-record.notification'
import { VetNotification } from '../notification/domain/dependent/vet.notification'

@Component({
  selector: 'lib-http',
  template: '',
  hostDirectives: [BaseComponentDirective],
})
export class HttpComponent implements OnInit, OnDestroy {
  private readonly sub: Subscription

  constructor(
    private chooseRole: ChooseRoleNotification,
    private clinic: ClinicNotification,
    private login: LoginNotification,
    private logout: LogoutNotification,
    private registration: RegistrationNotification,
    private validToken: ValidTokenNotification,
    private httpPost: HttpPostAppService,
    private serviceClinic: ServiceClinicNotification,
    private employment: EmploymentNotification,
    private openingHour: OpeningHourNotification,
    private medication: MedicationNotification,
    private client: ClientNotification,
    private pet: PetNotification,
    private appointment: AppointmentNotification,
    private invoice: InvoiceNotification,
    private medicalRecord: MedicalRecordNotification,
    private vet: VetNotification,
  ) {
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.sub.add(this.chooseRole.notification$.pipe(
      switchMap(domain => this.httpPost.chooseRolePost(domain)),
    ).subscribe())
    this.sub.add(this.clinic.notificationCreate$.pipe(
      switchMap(domain => this.httpPost.createClinicPost(domain)),
    ).subscribe())
    this.sub.add(this.clinic.notificationRead$.pipe(
      switchMap(() => this.httpPost.readClinicPost()),
    ).subscribe())
    this.sub.add(this.clinic.notificationUpdate$.pipe(
      switchMap(domain => this.httpPost.updateClinicPost(domain)),
    ).subscribe())
    this.sub.add(this.clinic.notificationDelete$.pipe(
      switchMap(domain => this.httpPost.deleteClinicPost(domain)),
    ).subscribe())
    this.sub.add(this.login.notification$.pipe(
      switchMap(domain => this.httpPost.loginPost(domain)),
    ).subscribe())
    this.sub.add(this.logout.notification$.pipe(
      switchMap(() => this.httpPost.logoutPost()),
    ).subscribe())
    this.sub.add(this.registration.notification$.pipe(
      switchMap(domain => this.httpPost.registrationPost(domain)),
    ).subscribe())
    this.sub.add(this.validToken.notification$.pipe(
      switchMap(() => this.httpPost.validTokenPost()),
    ).subscribe())
    this.sub.add(this.serviceClinic.notificationCreate$.pipe(
      switchMap(domain => this.httpPost.createServicePost(domain)),
    ).subscribe())
    this.sub.add(this.serviceClinic.notificationRead$.pipe(
      switchMap(() => this.httpPost.readServicePost()),
    ).subscribe())
    this.sub.add(this.serviceClinic.notificationUpdate$.pipe(
      switchMap(domain => this.httpPost.updateServicePost(domain)),
    ).subscribe())
    this.sub.add(this.serviceClinic.notificationDelete$.pipe(
      switchMap(domain => this.httpPost.deleteServicePost(domain)),
    ).subscribe())
    this.sub.add(this.openingHour.notificationRead$.pipe(
      switchMap(() => this.httpPost.readClinicOpeningHoursPost()),
    ).subscribe())
    this.sub.add(this.openingHour.notificationUpdate$.pipe(
      switchMap(domain => this.httpPost.updateClinicOpeningHoursPost(domain)),
    ).subscribe())
    this.sub.add(this.employment.notificationCreate$.pipe(
      switchMap(domain => this.httpPost.createEmploymentPost(domain)),
    ).subscribe())
    this.sub.add(this.employment.notificationRead$.pipe(
      switchMap(() => this.httpPost.readEmploymentPost()),
    ).subscribe())
    this.sub.add(this.employment.notificationUpdate$.pipe(
      switchMap(domain => this.httpPost.updateEmploymentPost(domain)),
    ).subscribe())
    this.sub.add(this.employment.notificationDelete$.pipe(
      switchMap(domain => this.httpPost.deleteEmploymentPost(domain)),
    ).subscribe())
    this.sub.add(this.medication.notificationCreate$.pipe(
      switchMap(domain => this.httpPost.createMedicationPost(domain)),
    ).subscribe())
    this.sub.add(this.medication.notificationRead$.pipe(
      switchMap(() => this.httpPost.readMedicationPost()),
    ).subscribe())
    this.sub.add(this.medication.notificationUpdate$.pipe(
      switchMap(domain => this.httpPost.updateMedicationPost(domain)),
    ).subscribe())
    this.sub.add(this.medication.notificationDelete$.pipe(
      switchMap(domain => this.httpPost.deleteMedicationPost(domain)),
    ).subscribe())
    this.sub.add(this.client.notificationCreate$.pipe(
      switchMap(domain => this.httpPost.createClientPost(domain)),
    ).subscribe())
    this.sub.add(this.client.notificationRead$.pipe(
      switchMap(() => this.httpPost.readClientPost()),
    ).subscribe())
    this.sub.add(this.client.notificationUpdate$.pipe(
      switchMap(domain => this.httpPost.updateClientPost(domain)),
    ).subscribe())
    this.sub.add(this.client.notificationDelete$.pipe(
      switchMap(domain => this.httpPost.deleteClientPost(domain)),
    ).subscribe())
    this.sub.add(this.pet.notificationCreate$.pipe(
      switchMap(domain => this.httpPost.createPetPost(domain)),
    ).subscribe())
    this.sub.add(this.pet.notificationRead$.pipe(
      switchMap(() => this.httpPost.readPetPost()),
    ).subscribe())
    this.sub.add(this.pet.notificationUpdate$.pipe(
      switchMap(domain => this.httpPost.updatePetPost(domain)),
    ).subscribe())
    this.sub.add(this.pet.notificationDelete$.pipe(
      switchMap(domain => this.httpPost.deletePetPost(domain)),
    ).subscribe())
    this.sub.add(this.appointment.notificationCreate$.pipe(
      switchMap(domain => this.httpPost.createAppointmentPost(domain)),
    ).subscribe())
    this.sub.add(this.appointment.notificationRead$.pipe(
      switchMap(() => this.httpPost.readAppointmentPost()),
    ).subscribe())
    this.sub.add(this.appointment.notificationUpdate$.pipe(
      switchMap(domain => this.httpPost.updateAppointmentPost(domain)),
    ).subscribe())
    this.sub.add(this.appointment.notificationDelete$.pipe(
      switchMap(domain => this.httpPost.deleteAppointmentPost(domain)),
    ).subscribe())
    this.sub.add(this.invoice.notificationCreate$.pipe(
      switchMap(domain => this.httpPost.createInvoicePost(domain)),
    ).subscribe())
    this.sub.add(this.invoice.notificationRead$.pipe(
      switchMap(() => this.httpPost.readInvoicePost()),
    ).subscribe())
    this.sub.add(this.invoice.notificationUpdate$.pipe(
      switchMap(domain => this.httpPost.updateInvoicePost(domain)),
    ).subscribe())
    this.sub.add(this.invoice.notificationDelete$.pipe(
      switchMap(domain => this.httpPost.deleteInvoicePost(domain)),
    ).subscribe())
    this.sub.add(this.medicalRecord.notificationCreate$.pipe(
      switchMap(domain => this.httpPost.createMedicalRecordPost(domain)),
    ).subscribe())
    this.sub.add(this.medicalRecord.notificationRead$.pipe(
      switchMap(() => this.httpPost.readMedicalRecordPost()),
    ).subscribe())
    this.sub.add(this.medicalRecord.notificationUpdate$.pipe(
      switchMap(domain => this.httpPost.updateMedicalRecordPost(domain)),
    ).subscribe())
    this.sub.add(this.medicalRecord.notificationDelete$.pipe(
      switchMap(domain => this.httpPost.deleteMedicalRecordPost(domain)),
    ).subscribe())
    this.sub.add(this.vet.notificationRead$.pipe(
      switchMap(() => this.httpPost.readVetPost()),
    ).subscribe())
    this.sub.add(this.vet.notificationUpdate$.pipe(
      switchMap(domain => this.httpPost.updateVetPost(domain)),
    ).subscribe())
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
