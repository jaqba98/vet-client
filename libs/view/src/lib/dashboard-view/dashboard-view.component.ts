import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-dashboard-view',
  imports: [CommonModule],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class DashboardViewComponent {
  isOpen = false;

  onClick() {
    this.isOpen = !this.isOpen;
  }

  getClassIsOpen() {
    return this.isOpen ? 'dashboard-view__menu--open' : 'dashboard-view__menu--close';
  }
}
