// done
import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { skip, Subscription, switchMap } from 'rxjs'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { LoginDomainDataType } from '@vet-client/lib-store'
import { HttpPostAppService } from '../app-service/http-post-app.service'

@Component({
  selector: 'lib-http',
  template: '',
  hostDirectives: [BaseComponentDirective],
})
export class HttpComponent implements OnInit, OnDestroy {
  private readonly sub = new Subscription()

  constructor(
    private readonly storeLoginDomainData: Store<LoginDomainDataType>,
    private readonly httpPost: HttpPostAppService,
  ) {}

  ngOnInit() {
    this.sub.add(this.storeLoginDomainData.select('loginDomainData').pipe(
      skip(1),
      switchMap(data => this.httpPost.loginPost(data)),
    ).subscribe())
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
