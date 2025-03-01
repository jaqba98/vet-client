import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-vet-page',
  templateUrl: './vet-page.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class VetPageComponent {}
