import { Component } from "@angular/core";

import { FooterViewComponent, MainViewComponent, NavViewComponent } from '@vet-client/lib-view';
import {
  LoginFormComponent,
  LoginRegistrationFormComponent,
  LoginRegistrationSmallFormComponent
} from '@vet-client/lib-form';
import { SectionControlComponent } from '@vet-client/lib-control';

@Component({
  selector: 'lib-login-page',
  imports: [
    NavViewComponent,
    LoginRegistrationFormComponent,
    LoginFormComponent,
    SectionControlComponent,
    MainViewComponent,
    LoginRegistrationSmallFormComponent,
    FooterViewComponent
  ],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  title = 'login works!';
}
