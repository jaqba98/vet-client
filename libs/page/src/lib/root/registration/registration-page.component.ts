import { Component } from "@angular/core";

import { NAV_VIEW_OUTSIDE, NavViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-registration-page',
  imports: [NavViewComponent],
  templateUrl: './registration-page.component.html'
})
export class RegistrationPageComponent {
  model = NAV_VIEW_OUTSIDE;
}
