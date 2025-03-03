// done
import { Component } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import { TITLE } from '@vet-client/lib-const';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { IconControlComponent } from '../icon-control/icon-control.component';
import { IconControlModel } from '../icon-control/icon-control.model';
import { TextControlComponent } from '../text-control/text-control.component';

@Component({
  selector: 'lib-small-logo-control',
  imports: [IconControlComponent, TextControlComponent],
  templateUrl: './small-logo-control.component.html',
  styleUrl: './small-logo-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class SmallLogoControlComponent {
  readonly title = TITLE;

  readonly logoModel: IconControlModel = {
    icon: faPaw,
    color: 'primary',
    fontSize: '1rem'
  };
}
