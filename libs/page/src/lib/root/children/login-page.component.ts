import { Component } from '@angular/core'

import { LoginViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-login-page',
  imports: [LoginViewComponent],
  template: '<lib-login-view></lib-login-view>',
})
export class LoginPageComponent {}
