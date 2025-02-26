import { Component } from "@angular/core";

import { AboutUsViewComponent, HeaderViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-home-index-page',
  imports: [HeaderViewComponent, AboutUsViewComponent],
  templateUrl: './home-index-page.component.html'
})
export class HomeIndexPageComponent {}
