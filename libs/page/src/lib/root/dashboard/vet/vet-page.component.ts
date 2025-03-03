import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { VetViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-vet-page',
  imports: [VetViewComponent],
  templateUrl: './vet-page.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class VetPageComponent {}
