// done
import { Component } from "@angular/core";

import {
  FooterViewComponent,
  MainViewComponent,
  NavViewComponent,
  RegistrationViewComponent
} from '@vet-client/lib-view';
import {
  HomeNavMenuFormComponent,
  LoginRegistrationFormComponent,
  LoginRegistrationSmallFormComponent
} from '@vet-client/lib-form';

@Component({
  selector: 'lib-registration-page',
  imports: [
    NavViewComponent,
    LoginRegistrationFormComponent,
    LoginRegistrationSmallFormComponent,
    MainViewComponent,
    FooterViewComponent,
    RegistrationViewComponent,
    HomeNavMenuFormComponent,
  ],
  templateUrl: './registration-page.component.html',
})
export class RegistrationPageComponent {}
