// done
import { Component } from "@angular/core";

import { FooterViewComponent, LoginViewComponent, MainViewComponent, NavViewComponent } from '@vet-client/lib-view';
import {
  LoginRegistrationFormComponent,
  LoginRegistrationSmallFormComponent
} from '@vet-client/lib-form';

@Component({
  selector: 'lib-login-page',
  imports: [
    NavViewComponent,
    LoginRegistrationFormComponent,
    LoginRegistrationSmallFormComponent,
    MainViewComponent,
    FooterViewComponent,
    LoginViewComponent,
  ],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {}
