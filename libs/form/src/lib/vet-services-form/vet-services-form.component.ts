import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TableFormComponent } from '../table-form/table-form.component';

@Component({
  selector: 'lib-vet-services-form',
  imports: [TableFormComponent],
  templateUrl: './vet-services-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetServicesFormComponent {}
