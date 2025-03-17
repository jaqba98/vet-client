import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'

import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { CardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { LoginDomainDataModel, LoginDomainFormModel } from '@vet-client/lib-domain'
import {
  loginDomainDataAction,
  LoginDomainDataType,
  LoginDomainFormType,
  loginDomainResponseAction,
  LoginDomainResponseType,
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

  constructor(
    private readonly storeData: Store<LoginDomainDataType>,
    private readonly storeForm: Store<LoginDomainFormType>,
    private readonly storeResponse: Store<LoginDomainResponseType>,
  ) {
    super()
  }

  ngOnInit() {
    this.sub.add(this.storeForm.select('loginDomainForm').subscribe((form) => {
      this.initBaseForm(form)
    }))
    this.sub.add(this.storeResponse.select('loginDomainResponse').subscribe((response) => {
      this.success = ''
      this.error = ''
      if (response.success) {
        this.success = response.message
      }
      else {
        this.error = response.message
      }
    }))
    this.storeResponse.dispatch(loginDomainResponseAction({
      success: false, message: '',
    }))
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  override onSubmit(data: LoginDomainDataModel) {
    this.storeData.dispatch(loginDomainDataAction(data))
  }
}
