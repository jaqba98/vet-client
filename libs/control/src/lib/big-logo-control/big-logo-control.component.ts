// done
import { Component } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import { TITLE } from '@vet-client/lib-const';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { IconControlComponent } from '../icon-control/icon-control.component';
import { IconControlModel } from '../icon-control/icon-control.model';
import { TextControlComponent } from '../text-control/text-control.component';

@Component({
  selector: 'lib-big-logo-control',
  imports: [IconControlComponent, TextControlComponent],
  templateUrl: './big-logo-control.component.html',
  styleUrl: './big-logo-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class BigLogoControlComponent {
  readonly title = TITLE;

  readonly logoModel: IconControlModel = {
    icon: faPaw,
    color: 'icon__light-primary'
  };
}
