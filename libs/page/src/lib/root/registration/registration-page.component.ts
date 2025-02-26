import { Component } from "@angular/core";

import { NavViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-registration-page',
  imports: [NavViewComponent],
  templateUrl: './registration-page.component.html'
})
export class RegistrationPageComponent {
  title = 'registration works!';
}
