import { Component } from '@angular/core'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { VetMedicalRecordViewComponent } from '@vet-client/lib-view'

@Component({
  selector: 'lib-vet-medical-record-page',
  imports: [VetMedicalRecordViewComponent],
  template: '<lib-vet-medical-record-view></lib-vet-medical-record-view>',
  hostDirectives: [BaseComponentDirective],
})
export class VetMedicalRecordPageComponent {}
