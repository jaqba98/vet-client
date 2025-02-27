import { Component } from "@angular/core";

import { NavViewComponent } from '@vet-client/lib-view';
import { LoginRegistrationFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-registration-page',
  imports: [NavViewComponent, LoginRegistrationFormComponent],
  templateUrl: './registration-page.component.html'
})
export class RegistrationPageComponent {
  title = 'registration works';
}
