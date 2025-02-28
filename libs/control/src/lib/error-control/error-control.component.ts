// done
import { Component, Input } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TextControlComponent } from '../text-control/text-control.component';

@Component({
  selector: 'lib-error-control',
  imports: [TextControlComponent],
  templateUrl: './error-control.component.html',
  styleUrl: './error-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class ErrorControlComponent {
  @Input({ required: true }) message!: string;
}
