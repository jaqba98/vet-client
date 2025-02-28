// done
import { Component } from "@angular/core";

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TextControlComponent } from '@vet-client/lib-control';

@Component({
  selector: 'lib-footer-view',
  templateUrl: './footer-view.component.html',
  imports: [TextControlComponent],
  styleUrl: './footer-view.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class FooterViewComponent {}
