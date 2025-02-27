import { Component } from "@angular/core";

import { NavViewComponent } from '@vet-client/lib-view';
import { LoginRegistrationFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-forgot-password-page',
  imports: [NavViewComponent, LoginRegistrationFormComponent],
  templateUrl: './forgot-password-page.component.html'
})
export class ForgotPasswordPageComponent {
  title = 'forgot-password works!';
}
