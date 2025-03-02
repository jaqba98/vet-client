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
  BigLoginRegistrationFormComponent,
  HomeNavMenuFormComponent,
  SmallLoginRegistrationFormComponent
} from '@vet-client/lib-form';

@Component({
  selector: 'lib-home-page',
  imports: [
    NavViewComponent,
    MainViewComponent,
    HeaderViewComponent,
    AboutUsViewComponent,
    PriceViewComponent,
    ContactViewComponent,
    FooterViewComponent,
    HomeNavMenuFormComponent,
    SmallLoginRegistrationFormComponent,
    BigLoginRegistrationFormComponent,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
