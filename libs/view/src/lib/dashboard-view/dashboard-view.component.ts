import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ButtonControlComponent, ButtonControlModel } from '@vet-client/lib-control';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-dashboard-view',
  imports: [CommonModule, ButtonControlComponent],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class DashboardViewComponent {
  isOpen = false;

  buttonModel: ButtonControlModel = {
    id: 'hamburger',
    value: {
      type: 'icon',
      icon: {
        icon: faBars,
        color: 'light-primary',
        fontSize: '1rem'
      },
    },
    fullWidth: false
  };

  onClick() {
    this.isOpen = !this.isOpen;
  }

  getClassIsOpen() {
    return this.isOpen ? 'dashboard-view__menu--open' : 'dashboard-view__menu--close';
  }
}
