import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { CardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { LoginDomainDataModel, LoginDomainFormModel } from '@vet-client/lib-domain'
import { LoginDomainFormType, LoginDomainDataType } from '@vet-client/lib-store'
import { Subscription } from 'rxjs'
import { setLoginDomainData } from '@vet-client/lib-store'

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent, CardControlComponent],
  templateUrl: './login-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class LoginFormComponent
  extends BaseFormService<LoginDomainFormModel, LoginDomainDataModel>
  implements OnInit, OnDestroy {
  private sub = new Subscription()

  constructor(
    private readonly storeLoginDomainForm: Store<LoginDomainFormType>,
    private readonly storeLoginDomainData: Store<LoginDomainDataType>,
  ) {
    super()
  }

  ngOnInit() {
    this.sub.add(
      this.storeLoginDomainForm.select('loginDomainForm').subscribe((loginDomain) => {
        this.initBaseForm(loginDomain)
      }),
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  override onSubmit(data: LoginDomainDataModel) {
    this.storeLoginDomainData.dispatch(setLoginDomainData(data))
  }
}
