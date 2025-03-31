import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BaseComponentDirective } from '@vet-client/lib-utils'
import { CardControlComponent } from '../card-control/card-control.component'
import { TextControlComponent } from '../text-control/text-control.component'

@Component({
  selector: 'lib-price-control',
  imports: [
    CommonModule,
    CardControlComponent,
    TextControlComponent,
  ],
  templateUrl: './price-control.component.html',
  styleUrl: './price-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class PriceControlComponent {
  @Input({ required: true }) title!: string

  @Input({ required: true }) description!: string

  @Input({ required: true }) price!: string

  @Input({ required: true }) elements!: string[]

  // buttonModel: ButtonControlModel

  // constructor(private baseForm: BaseFormBuilder) {
  // this.buttonModel = <ButtonControlModel> this.baseForm
  //   .buildButton('price', 'Get started', 'primary')
  //   .build().control
  // }
}
