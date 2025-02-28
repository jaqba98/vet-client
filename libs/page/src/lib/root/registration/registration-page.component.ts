// done
import { Component } from "@angular/core";

import {
  FooterViewComponent,
  MainViewComponent,
  NavViewComponent,
  RegistrationViewComponent
} from '@vet-client/lib-view';
import {
  LoginRegistrationFormComponent,
  LoginRegistrationSmallFormComponent, MenuOptionsFormComponent
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
    MenuOptionsFormComponent,
  ],
  templateUrl: './registration-page.component.html',
})
export class RegistrationPageComponent {}
