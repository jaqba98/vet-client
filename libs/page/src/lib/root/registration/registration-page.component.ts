import { Component } from "@angular/core";

import { NavViewComponent } from '@vet-client/lib-view';
import { LoginFormComponent, LoginRegistrationFormComponent, RegistrationFormComponent } from '@vet-client/lib-form';
import { SectionControlComponent } from '@vet-client/lib-control';

@Component({
  selector: 'lib-registration-page',
  imports: [
    NavViewComponent,
    LoginRegistrationFormComponent,
    SectionControlComponent,
    RegistrationFormComponent,
    LoginFormComponent,
  ],
  templateUrl: './registration-page.component.html',
})
export class RegistrationPageComponent {
  title = 'registration works';
}
