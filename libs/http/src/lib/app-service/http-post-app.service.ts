import { Injectable } from '@angular/core'

import { ChooseRoleHttpPostService } from '../dom-service/common/choose-role-http-post.service'
import {
  ChooseRoleDomainDataModel,
  ClinicDomainDataModel,
  DeleteDomainDataModel,
  LoginDomainDataModel, RegistrationDomainDataModel,
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
    private isClientHttpPost: IsClientHttpPostService,
    private isVetHttpPost: IsVetHttpPostService,
    private validTokenHttpPost: ValidTokenHttpPostService,
  ) {}

  chooseRolePost(domain: ChooseRoleDomainDataModel) {
    return this.chooseRoleHttpPost.chooseRolePost(domain)
  }

  createClinicPost(domain: ClinicDomainDataModel) {
    return this.clinicHttpPost.createClinicPost(domain)
  }

  readClinicPost() {
    return this.clinicHttpPost.readClinicPost()
  }

  updateClinicPost(domain: ClinicDomainDataModel) {
    return this.clinicHttpPost.updateClinicPost(domain)
  }

  deleteClinicPost(domain: DeleteDomainDataModel) {
    return this.clinicHttpPost.deleteClinicPost(domain)
  }

  loginPost(domain: LoginDomainDataModel) {
    return this.loginHttpPost.loginPost(domain)
  }

  logoutPost() {
    return this.logoutHttpPost.logoutPost()
  }

  registrationPost(domain: RegistrationDomainDataModel) {
    return this.registrationHttpPost.registrationPost(domain)
  }

  getAccountPost() {
    return this.getAccountHttpPost.getAccountPost()
  }

  hasRolePost() {
    return this.hasRoleHttpPost.hasRolePost()
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
}
