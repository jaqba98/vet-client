import { Component } from "@angular/core";

import { NavViewComponent } from '@vet-client/lib-view';
import { LoginRegistrationFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-login-page',
  imports: [NavViewComponent, LoginRegistrationFormComponent],
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
  title = 'login works!';
}
