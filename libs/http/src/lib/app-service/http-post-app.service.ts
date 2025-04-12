import { Injectable } from '@angular/core'

import { ChooseRoleHttpPostService } from '../dom-service/domain/logic/choose-role-http-post.service'
import { ClinicHttpPostService } from '../dom-service/domain/independent/clinic-http-post.service'
import { LoginHttpPostService } from '../dom-service/domain/logic/login-http-post.service'
import { LogoutHttpPostService } from '../dom-service/domain/logic/logout-http-post.service'
import { RegistrationHttpPostService } from '../dom-service/domain/logic/registration-http-post.service'
import { GetAccountHttpPostService } from '../dom-service/guard/get-account-http-post.service'
import { HasRoleHttpPostService } from '../dom-service/guard/has-role-http-post.service'
import { HasNotRoleHttpPostService } from '../dom-service/guard/has-not-role-http-post.service'
import { ValidTokenHttpPostService } from '../dom-service/guard/valid-token-http-post.service'
import { InvalidTokenHttpPostService } from '../dom-service/guard/invalid-token-http-post.service'
import { ServiceClinicHttpPostService } from '../dom-service/domain/dependent/service-clinic-http-post.service'
import { OpeningHourHttpPostService } from '../dom-service/domain/dependent/opening-hour-http-post.service'
import { EmploymentHttpPostService } from '../dom-service/domain/dependent/employment-http-post.service'
import { MedicationHttpPostService } from '../dom-service/domain/dependent/medication-http-post.service'
import { ClientHttpPostService } from '../dom-service/domain/dependent/client-http-post.service'
import { PetHttpPostService } from '../dom-service/domain/dependent/pet-http-post.service'
import { AppointmentHttpPostService } from '../dom-service/domain/dependent/appointment-http-post.service'
import { InvoiceHttpPostService } from '../dom-service/domain/dependent/invoice-http-post.service'
import { MedicalRecordHttpPostService } from '../dom-service/domain/dependent/medical-record-http-post.service'
import { VetHttpPostService } from '../dom-service/domain/dependent/vet-http-post.service'
import {
  AppointmentDomainModel,
  ChooseRoleDomainModel,
  ClientDomainModel,
  ClinicDomainModel,
  DeleteDomainModel,
  EmploymentDomainModel,
  InvoiceDomainModel,
  LoginDomainModel,
  MedicalRecordDomainModel,
  MedicationDomainModel,
  OpeningHourDomainModel,
  PetDomainModel,
  RegistrationDomainModel,
  ServiceClinicDomainModel,
  VetDomainModel,
} from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class HttpPostAppService {
  constructor(
    private chooseRoleHttpPost: ChooseRoleHttpPostService,
    private clinicHttpPost: ClinicHttpPostService,
    private loginHttpPost: LoginHttpPostService,
    private logoutHttpPost: LogoutHttpPostService,
    private registrationHttpPost: RegistrationHttpPostService,
    private getAccountHttpPost: GetAccountHttpPostService,
    private hasRoleHttpPost: HasRoleHttpPostService,
    private hasNotRoleHttpPost: HasNotRoleHttpPostService,
    private validTokenHttpPost: ValidTokenHttpPostService,
    private invalidTokenHttpPost: InvalidTokenHttpPostService,
    private serviceClinicHttpPost: ServiceClinicHttpPostService,
    private openingHourHttpPost: OpeningHourHttpPostService,
    private employmentHttpPost: EmploymentHttpPostService,
    private medicationHttpPost: MedicationHttpPostService,
    private clientHttpPost: ClientHttpPostService,
    private petHttpPost: PetHttpPostService,
    private appointmentHttpPost: AppointmentHttpPostService,
    private invoiceHttpPost: InvoiceHttpPostService,
    private medicalRecordHttpPost: MedicalRecordHttpPostService,
    private vetHttpPost: VetHttpPostService,
  ) {}

  chooseRolePost(domain: ChooseRoleDomainModel) {
    return this.chooseRoleHttpPost.chooseRolePost(domain)
  }

  createClinicPost(domain: ClinicDomainModel) {
    return this.clinicHttpPost.createClinicPost(domain)
  }

  readClinicPost() {
    return this.clinicHttpPost.readClinicPost()
  }

  updateClinicPost(domain: ClinicDomainModel) {
    return this.clinicHttpPost.updateClinicPost(domain)
  }

  deleteClinicPost(domain: DeleteDomainModel) {
    return this.clinicHttpPost.deleteClinicPost(domain)
  }

  loginPost(domain: LoginDomainModel) {
    return this.loginHttpPost.loginPost(domain)
  }

  logoutPost() {
    return this.logoutHttpPost.logoutPost()
  }

  registrationPost(domain: RegistrationDomainModel) {
    return this.registrationHttpPost.registrationPost(domain)
  }

  getAccountPost() {
    return this.getAccountHttpPost.getAccountPost()
  }

  hasRolePost() {
    return this.hasRoleHttpPost.hasRolePost()
  }

  hasNotRolePost() {
    return this.hasNotRoleHttpPost.hasNotRolePost()
  }

  validTokenPost() {
    return this.validTokenHttpPost.validTokenPost()
  }

  invalidTokenPost() {
    return this.invalidTokenHttpPost.invalidTokenPost()
  }

  createServicePost(domain: ServiceClinicDomainModel) {
    return this.serviceClinicHttpPost.createServicePost(domain)
  }

  readServicePost() {
    return this.serviceClinicHttpPost.readServicePost()
  }

  updateServicePost(domain: ServiceClinicDomainModel) {
    return this.serviceClinicHttpPost.updateServicePost(domain)
  }

  deleteServicePost(domain: DeleteDomainModel) {
    return this.serviceClinicHttpPost.deleteServicePost(domain)
  }

  readClinicOpeningHoursPost() {
    return this.openingHourHttpPost.readOpeningHourPost()
  }

  updateClinicOpeningHoursPost(domain: OpeningHourDomainModel) {
    return this.openingHourHttpPost.updateOpeningHourPost(domain)
  }

  createEmploymentPost(domain: EmploymentDomainModel) {
    return this.employmentHttpPost.createEmploymentPost(domain)
  }

  readEmploymentPost() {
    return this.employmentHttpPost.readEmploymentPost()
  }

  updateEmploymentPost(domain: EmploymentDomainModel) {
    return this.employmentHttpPost.updateEmploymentPost(domain)
  }

  deleteEmploymentPost(domain: DeleteDomainModel) {
    return this.employmentHttpPost.deleteEmploymentPost(domain)
  }

  createMedicationPost(domain: MedicationDomainModel) {
    return this.medicationHttpPost.createMedicationPost(domain)
  }

  readMedicationPost() {
    return this.medicationHttpPost.readMedicationPost()
  }

  updateMedicationPost(domain: MedicationDomainModel) {
    return this.medicationHttpPost.updateMedicationPost(domain)
  }

  deleteMedicationPost(domain: DeleteDomainModel) {
    return this.medicationHttpPost.deleteMedicationPost(domain)
  }

  createClientPost(domain: ClientDomainModel) {
    return this.clientHttpPost.createClientPost(domain)
  }

  readClientPost() {
    return this.clientHttpPost.readClientPost()
  }

  updateClientPost(domain: ClientDomainModel) {
    return this.clientHttpPost.updateClientPost(domain)
  }

  deleteClientPost(domain: DeleteDomainModel) {
    return this.clientHttpPost.deleteClientPost(domain)
  }

  createPetPost(domain: PetDomainModel) {
    return this.petHttpPost.createPetPost(domain)
  }

  readPetPost() {
    return this.petHttpPost.readPetPost()
  }

  updatePetPost(domain: PetDomainModel) {
    return this.petHttpPost.updatePetPost(domain)
  }

  deletePetPost(domain: DeleteDomainModel) {
    return this.petHttpPost.deletePetPost(domain)
  }

  createAppointmentPost(domain: AppointmentDomainModel) {
    return this.appointmentHttpPost.createAppointmentPost(domain)
  }

  readAppointmentPost() {
    return this.appointmentHttpPost.readAppointmentPost()
  }

  updateAppointmentPost(domain: AppointmentDomainModel) {
    return this.appointmentHttpPost.updateAppointmentPost(domain)
  }

  deleteAppointmentPost(domain: DeleteDomainModel) {
    return this.appointmentHttpPost.deleteAppointmentPost(domain)
  }

  createInvoicePost(domain: InvoiceDomainModel) {
    return this.invoiceHttpPost.createInvoicePost(domain)
  }

  readInvoicePost() {
    return this.invoiceHttpPost.readInvoicePost()
  }

  updateInvoicePost(domain: InvoiceDomainModel) {
    return this.invoiceHttpPost.updateInvoicePost(domain)
  }

  deleteInvoicePost(domain: DeleteDomainModel) {
    return this.invoiceHttpPost.deleteInvoicePost(domain)
  }

  createMedicalRecordPost(domain: MedicalRecordDomainModel) {
    return this.medicalRecordHttpPost.createMedicalRecordPost(domain)
  }

  readMedicalRecordPost() {
    return this.medicalRecordHttpPost.readMedicalRecordPost()
  }

  updateMedicalRecordPost(domain: MedicalRecordDomainModel) {
    return this.medicalRecordHttpPost.updateMedicalRecordPost(domain)
  }

  deleteMedicalRecordPost(domain: DeleteDomainModel) {
    return this.medicalRecordHttpPost.deleteMedicalRecordPost(domain)
  }

  readVetPost() {
    return this.vetHttpPost.readVetPost()
  }

  updateVetPost(domain: VetDomainModel) {
    return this.vetHttpPost.updateVetPost(domain)
  }
}
