import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ClientAppointmentViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-client-appointment-page',
  imports: [ClientAppointmentViewComponent],
  templateUrl: './client-appointment-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientAppointmentPageComponent {}
