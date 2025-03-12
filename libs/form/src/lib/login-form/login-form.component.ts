// done
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Store } from '@ngrx/store'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { CardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { LoginDomainDataModel, LoginDomainFormModel } from '@vet-client/lib-domain'
import {
  LoginDomainDataType,
  LoginDomainFormType,
  LoginDomainResponseType,
  setLoginDomainData,
  setLoginDomainResponse,
} from '@vet-client/lib-store'

@Component({
  selector: 'lib-login-form',
  imports: [CardControlComponent, BaseFormComponent],
  templateUrl: './login-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class LoginFormComponent
  extends BaseFormService<LoginDomainFormModel, LoginDomainDataModel>
  implements OnInit, OnDestroy {
  private readonly sub = new Subscription()

  readonly title = 'Login'

  constructor(
    private readonly storeLoginDomainData: Store<LoginDomainDataType>,
    private readonly storeLoginDomainForm: Store<LoginDomainFormType>,
    private readonly storeLoginDomainResponse: Store<LoginDomainResponseType>,
  ) {
    super()
  }

  ngOnInit() {
    this.sub.add(this.storeLoginDomainForm.select('loginDomainForm').subscribe((form) => {
      this.initBaseForm(form)
    }))
    this.sub.add(this.storeLoginDomainResponse.select('loginDomainResponse').subscribe((response) => {
      if (response.isError) {
        this.error = 'Incorrect email address or password!'
      }
      else {
        this.error = ''
      }
    }))
    this.storeLoginDomainResponse.dispatch(setLoginDomainResponse({ isError: false }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  override onSubmit(data: LoginDomainDataModel) {
    this.storeLoginDomainData.dispatch(setLoginDomainData(data))
  }
}
