import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';

import { NavViewComponent, NavViewModel } from '@vet-client/lib-view';
import { LoginRegistrationFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-home-page',
  imports: [NavViewComponent, RouterModule, LoginRegistrationFormComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  model: NavViewModel = {
    options: [
      {
        id: 'home_1',
        type: 'button',
        value: { type: 'text', text: 'Home 1' }
      },
      {
        id: 'home_2',
        type: 'button',
        value: { type: 'text', text: 'Home 2' }
      },
      {
        id: 'home_3',
        type: 'button',
        value: { type: 'text', text: 'Home 3' }
      },
      {
        id: 'home_4',
        type: 'button',
        value: { type: 'text', text: 'Home 4' }
      }
    ]
  };
}
