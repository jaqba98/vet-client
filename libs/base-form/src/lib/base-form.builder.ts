import { Injectable } from '@angular/core'
import { ValidatorFn } from '@angular/forms'
import { IconDefinition } from '@fortawesome/angular-fontawesome'

import { ColorType, InputType } from '@vet-client/lib-type'
import {
  ControlButtonModel,
  ControlInputModel,
  ControlRadioButtonModel,
  ControlTextareaModel,
  ControlType,
} from './base-form.model'
import { RadioButtonOptionModel } from '@vet-client/lib-control'

@Injectable({ providedIn: 'root' })
export class BaseFormBuilder {
  private control!: ControlType

  buildInput(type: InputType, label: string): this {
    this.control = <ControlInputModel> {
      kind: 'input',
      defaultValue: '',
      control: {
        type,
        label,
        placeholder: '',
      },
      validators: [],
    }
    return this
  }

  buildButton(id: string, text: string, buttonColor: ColorType): this {
    this.control = <ControlButtonModel> {
      kind: 'button',
      defaultValue: '',
      control: {
        type: 'text',
        id,
        text,
        buttonColor,
        color: 'light-primary',
      },
      validators: [],
    }
    return this
  }

  buildButtonIcon(id: string, icon: IconDefinition, buttonColor: ColorType): this {
    this.control = <ControlButtonModel> {
      kind: 'button',
      defaultValue: '',
      control: {
        type: 'icon',
        id,
        icon,
        buttonColor,
        color: 'light-primary',
        fontSize: '1rem',
      },
      validators: [],
    }
    return this
  }

  buildTextarea(label: string, height: string): this {
    this.control = <ControlTextareaModel> {
      kind: 'textarea',
      defaultValue: '',
      control: {
        label,
        placeholder: '',
        height,
      },
      validators: [],
    }
    return this
  }

  buildRadioButton(name: string, options: RadioButtonOptionModel[]): this {
    this.control = <ControlRadioButtonModel> {
      kind: 'radio-button',
      defaultValue: '',
      control: { name, options },
      validators: [],
    }
    return this
  }

  buildValidators(validators: ValidatorFn[]): this {
    this.control = <ControlType> { ...this.control, validators }
    return this
  }

  build<T>() {
    return <T> this.control
  }
}
