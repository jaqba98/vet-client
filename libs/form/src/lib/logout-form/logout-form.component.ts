import { Component, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Subscription } from 'rxjs'
import { Store } from '@ngrx/store'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { LogoutDomainDataModel, LogoutDomainFormModel } from '@vet-client/lib-domain'
import {
  LogoutDomainDataType,
  LogoutDomainFormType,
  setLogoutDomainData,
} from '@vet-client/lib-store'

@Component({
  selector: 'lib-logout-form',
  imports: [CommonModule, BaseFormComponent],
  templateUrl: './logout-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class LogoutFormComponent
  extends BaseFormService<LogoutDomainFormModel, LogoutDomainDataModel>
  implements OnInit, OnDestroy {
  private readonly sub = new Subscription()

  constructor(
    private readonly storeLogoutDomainData: Store<LogoutDomainDataType>,
    private readonly storeLogoutDomainForm: Store<LogoutDomainFormType>,
  ) {
    super()
  }

  ngOnInit() {
    this.sub.add(this.storeLogoutDomainForm.select('logoutDomainForm').subscribe(form => this.initBaseForm(form)))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  override onSubmit() {
    this.storeLogoutDomainData.dispatch(setLogoutDomainData({ logout: true }))
  }
}
