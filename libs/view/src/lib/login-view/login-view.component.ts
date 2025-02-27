import { Component } from '@angular/core';

import { LoginFormComponent } from '@vet-client/lib-form';
import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-login-view',
  imports: [LoginFormComponent],
  templateUrl: './login-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class LoginViewComponent {}
