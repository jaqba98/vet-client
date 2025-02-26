import { Component } from "@angular/core";

import { NavViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-login-page',
  imports: [NavViewComponent],
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
  title = 'login works!';
}
