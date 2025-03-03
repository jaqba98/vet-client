import { Component } from '@angular/core';

import { TextControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-footer-view',
  imports: [TextControlComponent],
  templateUrl: './footer-view.component.html',
  styleUrl: './footer-view.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class FooterViewComponent {}
