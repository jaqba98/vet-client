import { Component } from "@angular/core";

import { NavViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-forgot-password-page',
  imports: [NavViewComponent],
  templateUrl: './forgot-password-page.component.html'
})
export class ForgotPasswordPageComponent {
  title = 'forgot-password works!';
}
