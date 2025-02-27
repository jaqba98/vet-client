import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';

import { NavViewComponent } from '@vet-client/lib-view';
import { LoginRegistrationFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-home-page',
  imports: [NavViewComponent, RouterModule, LoginRegistrationFormComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {}
