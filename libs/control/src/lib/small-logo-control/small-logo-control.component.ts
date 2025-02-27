import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import { TITLE } from '@vet-client/lib-const';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { IconControlComponent } from '../icon-control/icon-control.component';
import { IconControlModel } from '../icon-control/icon-control.model';

@Component({
  selector: 'lib-small-logo-control',
  imports: [CommonModule, IconControlComponent],
  templateUrl: './small-logo-control.component.html',
  styleUrl: './small-logo-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
/** Small logo */
export class SmallLogoControlComponent {
  readonly title = TITLE;

  logoModel: IconControlModel = { icon: faPaw };
}
