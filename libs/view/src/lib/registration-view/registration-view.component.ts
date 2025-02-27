import { Component } from '@angular/core';

import { RegistrationFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-registration-view',
  imports: [RegistrationFormComponent],
  templateUrl: './registration-view.component.html',
})
export class RegistrationViewComponent {}
