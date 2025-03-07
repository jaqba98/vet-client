import { Component } from '@angular/core'

import { LoginViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-login-page',
  imports: [LoginViewComponent],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {}
