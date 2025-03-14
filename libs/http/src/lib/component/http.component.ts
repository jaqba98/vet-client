// done
import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { skip, Subscription, switchMap } from 'rxjs'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  ClinicDomainDataDeleteNotification,
  ClinicDomainDataReadNotification,
  LoginDomainDataType,
  LogoutDomainDataType,
} from '@vet-client/lib-store'
import { HttpPostAppService } from '../app-service/http-post-app.service'

@Component({
  selector: 'lib-http',
  template: '',
  hostDirectives: [BaseComponentDirective],
})
export class HttpComponent implements OnInit, OnDestroy {
  private readonly sub = new Subscription()

  constructor(
    private readonly clinicDomainDataReadNotification: ClinicDomainDataReadNotification,
    private readonly clinicDomainDataDeleteNotification: ClinicDomainDataDeleteNotification,
    private readonly storeLoginDomainData: Store<LoginDomainDataType>,
    private readonly storeLogoutDomainData: Store<LogoutDomainDataType>,
    private readonly httpPost: HttpPostAppService,
  ) {}

  ngOnInit() {
    this.sub.add(this.clinicDomainDataReadNotification.notification$.pipe(
      switchMap(() => this.httpPost.clinicReadPost()),
    ).subscribe())
    this.sub.add(this.clinicDomainDataDeleteNotification.notification$.pipe(
      switchMap(ids => this.httpPost.clinicDeletePost(ids)),
    ).subscribe(() => this.clinicDomainDataReadNotification.runNotification()))
    // I am here
    this.sub.add(this.storeLoginDomainData.select('loginDomainData').pipe(
      skip(1),
      switchMap(data => this.httpPost.loginPost(data)),
    ).subscribe())
    this.sub.add(this.storeLogoutDomainData.select('logoutDomainData').pipe(
      skip(1),
      switchMap(data => this.httpPost.logoutPost(data)),
    ).subscribe())
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
