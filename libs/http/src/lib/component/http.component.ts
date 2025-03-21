import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription, switchMap } from 'rxjs'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ChooseRoleNotification } from '../notification/choose-role.notification'
import { HttpPostAppService } from '../app-service/http-post-app.service'
import { ClinicNotification } from '../notification/clinic.notification'
import { LoginNotification } from '../notification/login.notification'
import { LogoutNotification } from '../notification/logout.notification'
import { RegistrationNotification } from '../notification/registration.notification'
import { GetAccountNotification } from '../notification/get-account.notification'
import { HasRoleNotification } from '../notification/has-role.notification'
import { IsClientNotification } from '../notification/is-client.notification'
import { IsVetNotification } from '../notification/is-vet.notification'
import { ValidTokenNotification } from '../notification/valid-token.notification'

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
    private getAccount: GetAccountNotification,
    private hasRole: HasRoleNotification,
    private isClient: IsClientNotification,
    private isVet: IsVetNotification,
    private validToken: ValidTokenNotification,
    private httpPost: HttpPostAppService,
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
    this.sub.add(this.getAccount.notification$.pipe(
      switchMap(() => this.httpPost.getAccountPost()),
    ).subscribe())
    this.sub.add(this.hasRole.notification$.pipe(
      switchMap(() => this.httpPost.hasRolePost()),
    ).subscribe())
    this.sub.add(this.isClient.notification$.pipe(
      switchMap(() => this.httpPost.isClientPost()),
    ).subscribe())
    this.sub.add(this.isVet.notification$.pipe(
      switchMap(() => this.httpPost.isVetPost()),
    ).subscribe())
    this.sub.add(this.validToken.notification$.pipe(
      switchMap(() => this.httpPost.validTokenPost()),
    ).subscribe())
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
