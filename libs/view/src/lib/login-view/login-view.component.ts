import { Component } from '@angular/core';

import { LoginFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-login-view',
  imports: [LoginFormComponent],
  templateUrl: './login-view.component.html',
})
export class LoginViewComponent {}
