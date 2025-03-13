import { Injectable } from '@angular/core'

import { ControlButtonModel } from './base-form.model'
import { IconDefinition } from '@fortawesome/angular-fontawesome'
import { ColorType } from '@vet-client/lib-type'

@Injectable({ providedIn: 'root' })
export class ControlButtonBuilder {
  button!: ControlButtonModel

  buildBase(id: string): ControlButtonBuilder {
    this.button = {
      id,
      kind: 'button',
      value: { type: 'text', text: '' },
      defaultValue: false,
      fullWidth: false,
      color: 'primary',
      isEnabled: true,
      isSquare: false,
    }
    return this
  }

  buildIcon(icon: IconDefinition, color: ColorType, fontSize: string): this {
    this.button.value = {
      type: 'icon',
      icon: { icon, color, fontSize },
    }
    return this
  }

  buildText(text: string): this {
    this.button.value = { type: 'text', text }
    return this
  }

  buildColor(color: ColorType): this {
    this.button.color = color
    return this
  }

  buildIsSquare(isSquare: boolean): this {
    this.button.isSquare = isSquare
    return this
  }

  build() {
    return this.button
  }
}
