import { Component } from "@angular/core";

import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-footer-view',
  templateUrl: './footer-view.component.html',
  styleUrl: './footer-view.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class FooterViewComponent {}
