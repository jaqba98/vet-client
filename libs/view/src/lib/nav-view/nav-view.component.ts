import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faBars, faPaw } from '@fortawesome/free-solid-svg-icons';

import {
  ButtonControlComponent,
  ButtonControlModel,
  IconControlComponent,
  IconControlModel
} from '@vet-client/lib-control';
import { TITLE } from '@vet-client/lib-const';
import { NavOptionsFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-nav-view',
  imports: [CommonModule, ButtonControlComponent, IconControlComponent, NavOptionsFormComponent],
  templateUrl: './nav-view.component.html',
  styleUrl: './nav-view.component.scss',
})
export class NavViewComponent {
  readonly title = TITLE;

  readonly hamburgerModel: ButtonControlModel = {
    id: 'hamburger',
    type: 'button',
    value: {
      type: 'icon',
      icon: { icon: faBars }
    }
  };

  readonly logoModel: IconControlModel = {
    icon: faPaw
  };

  onHamburgerEvent(id: string) {
    console.log('onHamburgerEvent', id);
  }
}
