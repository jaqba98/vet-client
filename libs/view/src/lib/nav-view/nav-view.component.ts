import { Component } from '@angular/core';

import { ButtonControlComponent, ButtonControlModel } from '@vet-client/lib-control';

@Component({
  selector: 'lib-nav-view',
  imports: [ButtonControlComponent],
  templateUrl: './nav-view.component.html',
  styleUrl: './nav-view.component.scss'
})
export class NavViewComponent {
  buttonModel: ButtonControlModel = {
    type: 'button',
    text: 'Hello'
  };
}
