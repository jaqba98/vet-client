// done
import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { skip, Subscription, switchMap } from 'rxjs'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import {
  ClinicDomainDataNotify,
  ClinicDomainDataType,
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
    private readonly clinicDomainDataNotify: ClinicDomainDataNotify,
    private readonly storeLoginDomainData: Store<LoginDomainDataType>,
    private readonly storeLogoutDomainData: Store<LogoutDomainDataType>,
    private readonly httpPost: HttpPostAppService,
  ) {}

  ngOnInit() {
    this.sub.add(this.storeLoginDomainData.select('loginDomainData').pipe(
      skip(1),
      switchMap(data => this.httpPost.loginPost(data)),
    ).subscribe())
    this.sub.add(this.storeLogoutDomainData.select('logoutDomainData').pipe(
      skip(1),
      switchMap(data => this.httpPost.logoutPost(data)),
    ).subscribe())
    this.sub.add(this.clinicDomainDataNotify.notification$.pipe(
      switchMap(() => this.httpPost.clinicReadPost()),
    ).subscribe())
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
