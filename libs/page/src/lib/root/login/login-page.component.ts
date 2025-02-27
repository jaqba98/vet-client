import { Component } from "@angular/core";

import { NavViewComponent } from '@vet-client/lib-view';
import { LoginFormComponent, LoginRegistrationFormComponent } from '@vet-client/lib-form';
import { SectionControlComponent } from '@vet-client/lib-control';

@Component({
  selector: 'lib-login-page',
  imports: [NavViewComponent, LoginRegistrationFormComponent, LoginFormComponent, SectionControlComponent],
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
  title = 'login works!';
}
