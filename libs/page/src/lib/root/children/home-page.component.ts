import { Component } from '@angular/core'

import {
  AboutUsViewComponent,
  ContactViewComponent,
  HeaderViewComponent,
} from '@vet-client/lib-view'

@Component({
  selector: 'lib-home-page',
  imports: [
    HeaderViewComponent,
    AboutUsViewComponent,
    ContactViewComponent,
  ],
  template: `
    <lib-header-view></lib-header-view>
    <lib-about-us-view></lib-about-us-view>
    <lib-contact-view></lib-contact-view>
  `,
})
export class HomePageComponent {}
