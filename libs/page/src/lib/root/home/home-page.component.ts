import { Component } from "@angular/core";

import { NAV_VIEW_OUTSIDE, NavViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-home-page',
  imports: [NavViewComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  model = NAV_VIEW_OUTSIDE;
}
