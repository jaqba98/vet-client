// done
import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { skip, Subscription, switchMap } from 'rxjs'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  ClinicDomainDataCreateNotification,
  ClinicDomainDataDeleteNotification,
  ClinicDomainDataReadNotification, ClinicDomainDataUpdateNotification,
  LoginDomainDataType,
  LogoutDomainDataType, RegistrationDomainDataNotification,
} from '@vet-client/lib-store'
import { HttpPostAppService } from '../app-service/http-post-app.service'
import { CookieService } from '@vet-client/lib-system'

@Component({
  selector: 'lib-http',
  template: '',
  hostDirectives: [BaseComponentDirective],
})
export class HttpComponent implements OnInit, OnDestroy {
  private readonly sub = new Subscription()

  constructor(
    private readonly registrationDomainForm: RegistrationDomainDataNotification,
    private readonly cookie: CookieService,
    private readonly clinicDomainDataCreateNotification: ClinicDomainDataCreateNotification,
    private readonly clinicDomainDataReadNotification: ClinicDomainDataReadNotification,
    private readonly clinicDomainDataDeleteNotification: ClinicDomainDataDeleteNotification,
    private readonly clinicDomainDataUpdateNotification: ClinicDomainDataUpdateNotification,
    private readonly storeLoginDomainData: Store<LoginDomainDataType>,
    private readonly storeLogoutDomainData: Store<LogoutDomainDataType>,
    private readonly httpPost: HttpPostAppService,
  ) {}

  ngOnInit() {
    const token = this.cookie.getToken()
    this.sub.add(this.registrationDomainForm.notification$.pipe(
      switchMap(data => this.httpPost.registrationPost(data)),
    ).subscribe())
    this.sub.add(this.storeLoginDomainData.select('loginDomainData').pipe(
      skip(1),
      switchMap(data => this.httpPost.loginPost(data)),
    ).subscribe())

    this.sub.add(this.clinicDomainDataCreateNotification.notification$.pipe(
      skip(1),
      switchMap(clinic => this.httpPost.clinicCreatePost(clinic)),
    ).subscribe(() => this.clinicDomainDataReadNotification.runNotification()))
    this.sub.add(this.clinicDomainDataUpdateNotification.notification$.pipe(
      skip(1),
      switchMap(clinic => this.httpPost.clinicUpdatePost({
        token, id: clinic.id, name: clinic.name,
      })),
    ).subscribe((response) => {
      console.log(response)
      this.clinicDomainDataReadNotification.runNotification()
    }))
    this.sub.add(this.clinicDomainDataReadNotification.notification$.pipe(
      skip(1),
      switchMap(() => this.httpPost.clinicReadPost()),
    ).subscribe())
    this.sub.add(this.clinicDomainDataDeleteNotification.notification$.pipe(
      skip(1),
      switchMap(ids => this.httpPost.clinicDeletePost(ids)),
    ).subscribe(() => this.clinicDomainDataReadNotification.runNotification()))
    this.sub.add(this.storeLogoutDomainData.select('logoutDomainData').pipe(
      skip(1),
      switchMap(data => this.httpPost.logoutPost(data)),
    ).subscribe())
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
