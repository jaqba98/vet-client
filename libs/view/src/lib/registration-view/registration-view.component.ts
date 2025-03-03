import { Component } from '@angular/core';

import { SectionControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { RouteSectionEnum } from '@vet-client/lib-store';
import { RegistrationFormComponent } from '@vet-client/lib-form';

@Component({
  selector: 'lib-registration-view',
  imports: [SectionControlComponent, RegistrationFormComponent],
  templateUrl: './registration-view.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class RegistrationViewComponent {
  sectionId = RouteSectionEnum.registration;
}
