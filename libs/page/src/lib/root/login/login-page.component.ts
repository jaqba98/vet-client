// done
import { Component } from "@angular/core";

import { FooterViewComponent, LoginViewComponent, MainViewComponent, NavViewComponent } from '@vet-client/lib-view';
import {
  HomeNavMenuFormComponent, BigLoginRegistrationFormComponent, SmallLoginRegistrationFormComponent
} from '@vet-client/lib-form';

@Component({
  selector: 'lib-login-page',
  imports: [
    NavViewComponent,
    MainViewComponent,
    FooterViewComponent,
    LoginViewComponent,
    HomeNavMenuFormComponent,
    BigLoginRegistrationFormComponent,
    SmallLoginRegistrationFormComponent,
  ],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {}
