import { Component } from '@angular/core'

import {
  AboutUsViewComponent,
  ContactViewComponent,
  HeaderViewComponent,
  PriceViewComponent,
} from '@vet-client/lib-view'

@Component({
  selector: 'lib-home-page',
  imports: [
    HeaderViewComponent,
    AboutUsViewComponent,
    PriceViewComponent,
    ContactViewComponent,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
