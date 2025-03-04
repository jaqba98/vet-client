import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { DashboardViewComponent } from '@vet-client/lib-view';
import { ClientMenuFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-client-page',
  imports: [DashboardViewComponent, ClientMenuFormComponent],
  templateUrl: './client-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientPageComponent {}
