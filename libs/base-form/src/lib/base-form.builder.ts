import { Injectable } from '@angular/core'
import { IconDefinition } from '@fortawesome/angular-fontawesome'

import { ControlButtonModel, ControlInputModel, ControlRadioButtonModel } from './base-form.model'
import { ColorType } from '@vet-client/lib-type'
import { ValidatorFn } from '@angular/forms'
import { TextConvertUtils } from '@vet-client/lib-utils'

@Injectable({ providedIn: 'root' })
export class BaseFormBuilder {
  static buildButtonText(id: string, text: string, color: ColorType, isEnabled: boolean, width40px = false): ControlButtonModel {
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
      isSquare: width40px,
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
      isSquare: true,
    }
  }

  static buildInputText(label: string, validators: ValidatorFn[]): ControlInputModel {
    return {
      kind: 'input',
      type: 'text',
      label,
      placeholder: '',
      validators,
      defaultValue: '',
      isEnabled: true,
    }
  }

  static buildInputPassword(label: string, validators: ValidatorFn[]): ControlInputModel {
    return {
      kind: 'input',
      type: 'password',
      label,
      placeholder: '',
      validators,
      defaultValue: '',
      isEnabled: true,
    }
  }

  static buildRadioButton(options: string[], defaultValue: string): ControlRadioButtonModel {
    return {
      kind: 'radio-button',
      name: 'role',
      options: options.map((option) => {
        return {
          id: option,
          value: TextConvertUtils.firstLetterUppercase(option),
        }
      }),
      defaultValue,
      isEnabled: true,
    }
  }

  static buildHiddenControl(): ControlInputModel {
    return {
      kind: 'input',
      type: 'text',
      label: '',
      placeholder: '',
      validators: [],
      defaultValue: '',
      isEnabled: false,
    }
  }
}
