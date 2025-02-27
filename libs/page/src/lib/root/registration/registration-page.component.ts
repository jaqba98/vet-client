import { Component } from "@angular/core";

import { MainViewComponent, NavViewComponent } from '@vet-client/lib-view';
import {
  LoginRegistrationFormComponent,
  LoginRegistrationSmallFormComponent,
  RegistrationFormComponent
} from '@vet-client/lib-form';
import { SectionControlComponent } from '@vet-client/lib-control';

@Component({
  selector: 'lib-registration-page',
  imports: [
    NavViewComponent,
    LoginRegistrationFormComponent,
    LoginRegistrationSmallFormComponent,
    SectionControlComponent,
    RegistrationFormComponent,
    MainViewComponent,
  ],
  templateUrl: './registration-page.component.html'
})
export class RegistrationPageComponent {
  title = 'registration works';
}
