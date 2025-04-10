import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { DashboardViewComponent } from '@vet-client/lib-view'
import { VetMenuFormComponent } from '@vet-client/lib-form'

@Component({
  selector: 'lib-vet-page',
  imports: [DashboardViewComponent, VetMenuFormComponent],
  template: `
    <lib-dashboard-view>
      <lib-vet-menu-form></lib-vet-menu-form>
    </lib-dashboard-view>
  `,
  hostDirectives: [BaseComponentDirective],
})
export class VetPageComponent {}
