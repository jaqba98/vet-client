import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TableFormComponent } from '../table-form/table-form.component';

@Component({
  selector: 'lib-client-pets-form',
  imports: [TableFormComponent],
  templateUrl: './client-pets-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientPetsFormComponent {}
