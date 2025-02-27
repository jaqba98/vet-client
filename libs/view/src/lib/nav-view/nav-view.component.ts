import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HamburgerFormComponent, MenuOptionsFormComponent } from '@vet-client/lib-form';
import { SmallLogoControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-nav-view',
  imports: [
    CommonModule,
    HamburgerFormComponent,
    MenuOptionsFormComponent,
    SmallLogoControlComponent
  ],
  templateUrl: './nav-view.component.html',
  styleUrl: './nav-view.component.scss',
  hostDirectives: [BaseComponentDirective]
})
/** Nav view */
export class NavViewComponent {
  mobileMenuIsOpen = false;

  onHamburgerEvent() {
    this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
  }

  onMenuOptionsFormEvent() {
    this.mobileMenuIsOpen = false;
  }
}
