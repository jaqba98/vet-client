import { Component } from "@angular/core";

import {
  AboutUsViewComponent, ContactViewComponent, FooterViewComponent,
  HeaderViewComponent,
  MainViewComponent,
  NavViewComponent,
  PriceViewComponent
} from '@vet-client/lib-view';
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
    PriceViewComponent,
    ContactViewComponent,
    FooterViewComponent
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
