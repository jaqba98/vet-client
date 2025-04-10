import { Component } from '@angular/core'

import { RegistrationViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-registration-page',
  imports: [RegistrationViewComponent],
  template: '<lib-registration-view></lib-registration-view>',
})
export class RegistrationPageComponent {}
