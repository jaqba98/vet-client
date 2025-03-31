import { Injectable } from '@angular/core'

import { ChooseRoleHttpPostService } from '../dom-service/common/choose-role-http-post.service'
import {
  ChooseRoleDomainModel,
  ClinicDomainModel,
  DeleteDomainModel,
  EmploymentDomainModel,
  LoginDomainModel, MedicationDomainModel,
  OpeningHoursDomainModel,
  RegistrationDomainModel,
  ServiceDomainModel,
} from '@vet-client/lib-domain'
import { ClinicHttpPostService } from '../dom-service/common/clinic-http-post.service'
import { LoginHttpPostService } from '../dom-service/common/login-http-post.service'
import { LogoutHttpPostService } from '../dom-service/common/logout-http-post.service'
import { RegistrationHttpPostService } from '../dom-service/common/registration-http-post.service'
import { GetAccountHttpPostService } from '../dom-service/guard/get-account-http-post.service'
import { HasRoleHttpPostService } from '../dom-service/guard/has-role-http-post.service'
import { ValidTokenHttpPostService } from '../dom-service/guard/valid-token-http-post.service'
import { HasNotRoleHttpPostService } from '../dom-service/guard/has-not-role-http-post.service'
import { InvalidTokenHttpPostService } from '../dom-service/guard/invalid-token-http-post.service'
import { ServiceHttpPostService } from '../dom-service/common/service-http-post.service'
import { ClinicOpeningHoursHttpPostService } from '../dom-service/common/clinic-opening-hours-http-post.service'
import { EmploymentHttpPostService } from '../dom-service/common/employment-http-post.service'
import { MedicationHttpPostService } from '../dom-service/common/medication-http-post.service'

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
    private serviceHttpPost: ServiceHttpPostService,
    private clinicOpeningHoursHttpPost: ClinicOpeningHoursHttpPostService,
    private employmentHttpPost: EmploymentHttpPostService,
    private medicationHttpPost: MedicationHttpPostService,
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

  createServicePost(domain: ServiceDomainModel) {
    return this.serviceHttpPost.createServicePost(domain)
  }

  readServicePost() {
    return this.serviceHttpPost.readServicePost()
  }

  updateServicePost(domain: ServiceDomainModel) {
    return this.serviceHttpPost.updateServicePost(domain)
  }

  deleteServicePost(domain: DeleteDomainModel) {
    return this.serviceHttpPost.deleteServicePost(domain)
  }

  readClinicOpeningHoursPost() {
    return this.clinicOpeningHoursHttpPost.readClinicOpeningHoursPost()
  }

  updateClinicOpeningHoursPost(domain: OpeningHoursDomainModel) {
    return this.clinicOpeningHoursHttpPost.updateClinicOpeningHoursPost(domain)
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
}
