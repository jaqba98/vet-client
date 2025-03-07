import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import {
  RoutePageEnum,
  RouteSectionEnum,
  RouteStoreModel,
  setRoute,
} from '@vet-client/lib-store'
import { CookieService } from '@vet-client/lib-system'
import { HttpPostAppService } from '@vet-client/lib-http'
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form'
import { CardControlComponent } from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { LoginFormModel, LoginModel } from './login-form.model'

@Component({
  selector: 'lib-login-form',
  imports: [BaseFormComponent, CardControlComponent],
  templateUrl: './login-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class LoginFormComponent
  extends BaseFormService<LoginFormModel, LoginModel>
  implements OnInit {
  constructor(
    private readonly httpPost: HttpPostAppService,
    private readonly cookie: CookieService,
    private readonly store: Store<RouteStoreModel>,
  ) {
    super()
  }

  ngOnInit() {
    this.initBaseForm({
      email: {
        kind: 'input',
        type: 'text',
        label: 'Email',
        placeholder: '',
        defaultValue: '',
        validators: [],
        isEnabled: true,
      },
      password: {
        kind: 'input',
        type: 'password',
        label: 'Password',
        placeholder: '',
        defaultValue: '',
        validators: [],
        isEnabled: true,
      },
      login: {
        id: 'login',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Login',
        },
        defaultValue: false,
        fullWidth: false,
        color: 'primary',
        isEnabled: true,
      },
    })
  }

  override onSubmit(model: LoginModel) {
    const { email, password } = model
    this.httpPost.loginPost({ email, password }).subscribe((response) => {
      this.resetBaseForm()
      const { success, token } = response
      if (success) {
        this.cookie.updateToken(token)
        this.store.dispatch(
          setRoute({
            page: RoutePageEnum.dashboard,
            section: RouteSectionEnum.dashboard,
          }),
        )
      }
      else {
        this.error = 'Incorrect email address or password!'
      }
    })
  }
}
