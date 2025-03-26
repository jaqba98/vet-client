import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'

import { ColorType } from '@vet-client/lib-type'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { TextControlComponent } from '../text-control/text-control.component'
import { SelectControlModel } from './select-control.model'

@Component({
  selector: 'lib-select-control',
  imports: [CommonModule, ReactiveFormsModule, TextControlComponent],
  templateUrl: './select-control.component.html',
  styleUrl: './select-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class SelectControlComponent {
  @Input({ required: true }) model!: SelectControlModel

  @Input({ required: true }) formGroup!: FormGroup

  @Input({ required: true }) controlName!: string

  @Input() isError = false

  isLabel() {
    return this.model.label !== ''
  }

  getLabelColor(): ColorType {
    return this.isError ? 'error' : 'dark-secondary'
  }
}
