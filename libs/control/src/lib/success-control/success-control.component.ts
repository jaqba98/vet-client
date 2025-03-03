import { Component } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TextControlComponent } from '../text-control/text-control.component';
import { IconControlComponent } from '../icon-control/icon-control.component';
import { IconControlModel } from '../icon-control/icon-control.model';

@Component({
  selector: 'lib-success-control',
  imports: [TextControlComponent, IconControlComponent],
  templateUrl: './success-control.component.html',
  styleUrl: './success-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class SuccessControlComponent {
  readonly model: IconControlModel = {
    icon: faCircleCheck,
    color: 'success',
    fontSize: '1rem'
  }
}
