import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-toast-control',
  templateUrl: './toast-control.component.html',
  styleUrl: './toast-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class ToastControlComponent {}
