import { Component } from "@angular/core";

import { AboutUsViewComponent, HeaderViewComponent, MainViewComponent, NavViewComponent } from '@vet-client/lib-view';
import { LoginRegistrationFormComponent, LoginRegistrationSmallFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-home-page',
  imports: [
    NavViewComponent,
    HeaderViewComponent,
    AboutUsViewComponent,
    LoginRegistrationFormComponent,
    MainViewComponent,
    LoginRegistrationSmallFormComponent,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
