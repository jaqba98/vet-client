// done
import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription, switchMap } from 'rxjs'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { HttpPostAppService } from '../app-service/http-post-app.service'
import { LoginDomainDataType } from '@vet-client/lib-store'

@Component({
  selector: 'lib-http',
  template: '',
  hostDirectives: [BaseComponentDirective],
})
export class HttpComponent implements OnInit, OnDestroy {
  private sub: Subscription

  constructor(
    private storeLoginDomain: Store<LoginDomainDataType>,
    private httpPost: HttpPostAppService,
  ) {
    this.sub = new Subscription()
  }

  ngOnInit() {
    this.sub.add(
      this.storeLoginDomain.select('loginDomainData').pipe(switchMap(data => this.httpPost.loginPost(data))).subscribe(),
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
