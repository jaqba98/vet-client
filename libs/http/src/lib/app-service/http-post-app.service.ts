import { Injectable } from '@angular/core'

import { ChooseRoleHttpPostService } from '../dom-service/common/choose-role-http-post.service'
import {
  ChooseRoleDomainModel,
  ClinicDomainModel,
  DeleteDomainModel,
  LoginDomainModel, LogoutDomainModel, OpeningHoursDomainModel,
  RegistrationDomainModel, ServiceDomainModel,
} from '@vet-client/lib-domain'
import { ClinicHttpPostService } from '../dom-service/common/clinic-http-post.service'
import { LoginHttpPostService } from '../dom-service/common/login-http-post.service'
import { LogoutHttpPostService } from '../dom-service/common/logout-http-post.service'
import { RegistrationHttpPostService } from '../dom-service/common/registration-http-post.service'
import { GetAccountHttpPostService } from '../dom-service/guard/get-account-http-post.service'
import { HasRoleHttpPostService } from '../dom-service/guard/has-role-http-post.service'
import { IsClientHttpPostService } from '../dom-service/guard/is-client-http-post.service'
import { IsVetHttpPostService } from '../dom-service/guard/is-vet-http-post.service'
import { ValidTokenHttpPostService } from '../dom-service/guard/valid-token-http-post.service'
import { HasNotRoleHttpPostService } from '../dom-service/guard/has-not-role-http-post.service'
import { InvalidTokenHttpPostService } from '../dom-service/guard/invalid-token-http-post.service'
import { ServiceHttpPostService } from '../dom-service/common/service-http-post.service'
import { ClinicOpeningHoursHttpPostService } from '../dom-service/common/clinic-opening-hours-http-post.service'

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
    private isClientHttpPost: IsClientHttpPostService,
    private isVetHttpPost: IsVetHttpPostService,
    private validTokenHttpPost: ValidTokenHttpPostService,
    private invalidTokenHttpPost: InvalidTokenHttpPostService,
    private serviceHttpPost: ServiceHttpPostService,
    private clinicOpeningHoursHttpPost: ClinicOpeningHoursHttpPostService,
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

  logoutPost(domain: LogoutDomainModel) {
    return this.logoutHttpPost.logoutPost(domain)
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

  isClientPost() {
    return this.isClientHttpPost.isClientPost()
  }

  isVetPost() {
    return this.isVetHttpPost.isVetPost()
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
}
