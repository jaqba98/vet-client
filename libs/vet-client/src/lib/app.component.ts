import { Component } from '@angular/core'

import { RootPageComponent } from '@vet-client/lib-page'

@Component({
  selector: 'lib-app',
  imports: [RootPageComponent],
  template: '<lib-root-page></lib-root-page>',
})
export class AppComponent {}
