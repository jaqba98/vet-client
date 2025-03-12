import { Injectable } from '@angular/core'
import { IconDefinition } from '@fortawesome/angular-fontawesome'

import { ControlButtonModel, ControlInputModel } from './base-form.model'
import { ColorType } from '@vet-client/lib-type'
import { ValidatorFn } from '@angular/forms'

@Injectable({ providedIn: 'root' })
export class BaseFormBuilder {
  static buildButtonText(id: string, text: string, color: ColorType, isEnabled: boolean): ControlButtonModel {
    return {
      id,
      kind: 'button',
      value: {
        type: 'text',
        text,
      },
      defaultValue: false,
      fullWidth: false,
      color,
      isEnabled,
      width40px: false,
    }
  }

  static buildButtonIcon(id: string, icon: IconDefinition, color: ColorType, isEnabled: boolean): ControlButtonModel {
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
      width40px: true,
    }
  }

  static buildInputText(label: string, validators: ValidatorFn[], isEnabled: boolean): ControlInputModel {
    return {
      kind: 'input',
      type: 'text',
      label,
      placeholder: '',
      validators,
      defaultValue: '',
      isEnabled,
    }
  }

  static buildInputPassword(label: string, validators: ValidatorFn[], isEnabled: boolean): ControlInputModel {
    return {
      kind: 'input',
      type: 'password',
      label,
      placeholder: '',
      validators,
      defaultValue: '',
      isEnabled,
    }
  }
}
