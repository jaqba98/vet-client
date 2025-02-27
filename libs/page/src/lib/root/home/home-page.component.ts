import { Component } from "@angular/core";

import { AboutUsViewComponent, HeaderViewComponent, NavViewComponent } from '@vet-client/lib-view';
import { LoginRegistrationFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-home-page',
  imports: [NavViewComponent ,HeaderViewComponent, AboutUsViewComponent, LoginRegistrationFormComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {}
