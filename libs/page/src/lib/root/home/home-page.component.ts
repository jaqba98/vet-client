import { Component } from '@angular/core';

import { LoginViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-home-page',
  imports: [LoginViewComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {}
