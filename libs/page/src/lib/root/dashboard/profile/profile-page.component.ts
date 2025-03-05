import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ProfileViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-profile-page',
  imports: [ProfileViewComponent],
  templateUrl: './profile-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ProfilePageComponent {}
