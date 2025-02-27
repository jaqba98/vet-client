// done
import { Component, Input } from '@angular/core';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TextControlComponent } from '../text-control/text-control.component';
import { IconControlComponent } from '../icon-control/icon-control.component';
import { IconControlModel } from '../icon-control/icon-control.model';

@Component({
  selector: 'lib-error-control',
  imports: [IconControlComponent ,TextControlComponent],
  templateUrl: './error-control.component.html',
  styleUrl: './error-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class ErrorControlComponent {
  @Input({ required: true }) message!: string;

  readonly errorModel: IconControlModel = {
    icon: faCircleExclamation,
    color: 'icon__light-primary'
  };
}
