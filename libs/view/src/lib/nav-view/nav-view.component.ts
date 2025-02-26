import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { faBars, faPaw } from '@fortawesome/free-solid-svg-icons';

import {
  ButtonControlComponent,
  ButtonControlModel,
  IconControlComponent,
  IconControlModel
} from '@vet-client/lib-control';
import { NavViewModel } from './nav-view.model';

@Component({
  selector: 'lib-nav-view',
  imports: [CommonModule, ButtonControlComponent, IconControlComponent],
  templateUrl: './nav-view.component.html',
  styleUrl: './nav-view.component.scss',
})
export class NavViewComponent {
  @Input({ required: true }) model!: NavViewModel;

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

  onOptionEvent(id: string) {
    console.log('onOptionEvent', id);
  }
}
