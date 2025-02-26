import { Component } from "@angular/core";

import { NAV_VIEW_OUTSIDE, NavViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-forgot-password-page',
  imports: [NavViewComponent],
  templateUrl: './forgot-password-page.component.html'
})
export class ForgotPasswordPageComponent {
  model = NAV_VIEW_OUTSIDE;
}
