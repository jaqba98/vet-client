import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-client-page',
  templateUrl: './client-page.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class ClientPageComponent {}
