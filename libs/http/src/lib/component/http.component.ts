import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription, switchMap } from 'rxjs'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ChooseRoleNotification } from '../notification/choose-role.notification'
import { HttpPostAppService } from '../app-service/http-post-app.service'
import { ClinicNotification } from '../notification/clinic.notification'
import { LoginNotification } from '../notification/login.notification'
import { LogoutNotification } from '../notification/logout.notification'
import { RegistrationNotification } from '../notification/registration.notification'
import { ValidTokenNotification } from '../notification/valid-token.notification'
import { ServiceNotification } from '../notification/service.notification'

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
    private service: ServiceNotification,
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
      switchMap(domain => this.httpPost.logoutPost(domain)),
    ).subscribe())
    this.sub.add(this.registration.notification$.pipe(
      switchMap(domain => this.httpPost.registrationPost(domain)),
    ).subscribe())
    this.sub.add(this.validToken.notification$.pipe(
      switchMap(() => this.httpPost.validTokenPost()),
    ).subscribe())
    this.sub.add(this.service.notificationCreate$.pipe(
      switchMap(domain => this.httpPost.createServicePost(domain)),
    ).subscribe())
    this.sub.add(this.service.notificationRead$.pipe(
      switchMap(() => this.httpPost.readServicePost()),
    ).subscribe())
    this.sub.add(this.service.notificationUpdate$.pipe(
      switchMap(domain => this.httpPost.updateServicePost(domain)),
    ).subscribe())
    this.sub.add(this.service.notificationDelete$.pipe(
      switchMap(domain => this.httpPost.deleteServicePost(domain)),
    ).subscribe())
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
