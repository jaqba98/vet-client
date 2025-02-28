// done
import { Component } from "@angular/core";
import {
  AboutUsViewComponent,
  ContactViewComponent,
  FooterViewComponent,
  HeaderViewComponent,
  MainViewComponent,
  NavViewComponent,
  PriceViewComponent
} from '@vet-client/lib-view';
import {
  LoginRegistrationFormComponent,
  LoginRegistrationSmallFormComponent,
  MenuOptionsFormComponent
} from '@vet-client/lib-form';

@Component({
  selector: 'lib-home-page',
  imports: [
    NavViewComponent,
    LoginRegistrationFormComponent,
    LoginRegistrationSmallFormComponent,
    MainViewComponent,
    HeaderViewComponent,
    AboutUsViewComponent,
    PriceViewComponent,
    ContactViewComponent,
    FooterViewComponent,
    MenuOptionsFormComponent,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
