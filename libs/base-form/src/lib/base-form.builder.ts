import { Injectable } from '@angular/core'
import { IconDefinition } from '@fortawesome/angular-fontawesome'

import { ControlButtonModel } from './base-form.model'
import { ColorType } from '@vet-client/lib-type'

@Injectable({ providedIn: 'root' })
export class BaseFormBuilder {
  buildButtonIcon(id: string, icon: IconDefinition, color: ColorType, isEnabled: boolean): ControlButtonModel {
    return {
      id,
      kind: 'button',
      value: {
        type: 'icon',
        icon: {
          icon,
          color: 'light-primary',
          fontSize: '1rem',
        },
      },
      defaultValue: false,
      fullWidth: false,
      color,
      isEnabled,
    }
  }
}
