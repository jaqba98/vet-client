import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ClientViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-client-page',
  imports: [ClientViewComponent],
  templateUrl: './client-page.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ClientPageComponent {}
