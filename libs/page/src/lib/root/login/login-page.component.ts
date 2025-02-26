import { Component } from "@angular/core";

import { NAV_VIEW_OUTSIDE, NavViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-login-page',
  imports: [NavViewComponent],
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
  model = NAV_VIEW_OUTSIDE;
}
