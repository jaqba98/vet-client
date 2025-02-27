import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import {
  IconControlModel,
  SmallLogoControlComponent
} from '@vet-client/lib-control';
import { TITLE } from '@vet-client/lib-const';
import { HamburgerFormComponent, MenuOptionsFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-nav-view',
  imports: [
    CommonModule,
    SmallLogoControlComponent,
    MenuOptionsFormComponent,
    HamburgerFormComponent
  ],
  templateUrl: './nav-view.component.html',
  styleUrl: './nav-view.component.scss',
})
export class NavViewComponent {
  readonly title = TITLE;

  mobileOptionsIsOpen = false;

  readonly logoModel: IconControlModel = {
    icon: faPaw,
  };

  onHamburgerEvent() {
    this.mobileOptionsIsOpen = !this.mobileOptionsIsOpen;
  }
}
