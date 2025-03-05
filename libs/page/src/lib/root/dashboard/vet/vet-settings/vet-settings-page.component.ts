import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { VetSettingsViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-vet-settings-page',
  imports: [VetSettingsViewComponent],
  templateUrl: './vet-settings-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class VetSettingsPageComponent {}
