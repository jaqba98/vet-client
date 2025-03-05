import { Component } from '@angular/core';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ClientSettingsViewComponent } from '@vet-client/lib-view';

@Component({
  selector: 'lib-client-settings-page',
  imports: [ClientSettingsViewComponent],
  templateUrl: './client-settings-page.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class ClientSettingsPageComponent {}
