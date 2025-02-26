import { Component } from "@angular/core";

import { NavViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-home-page',
  imports: [NavViewComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  title = 'home works!';
}
