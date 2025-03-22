import { ValidatorFn } from '@angular/forms'

import {
  ButtonControlModel,
  InputControlModel,
  RadioButtonControlModel,
  TextareaControlModel,
} from '@vet-client/lib-control'

interface ControlBaseModel<TControl> {
  defaultValue: string
  control: TControl
  validators: ValidatorFn[]
}

export interface ControlInputModel extends ControlBaseModel<InputControlModel> {
  kind: 'input'
}

export interface ControlButtonModel extends ControlBaseModel<ButtonControlModel> {
  kind: 'button'
}

export interface ControlTextareaModel extends ControlBaseModel<TextareaControlModel> {
  kind: 'textarea'
}

export interface ControlRadioButtonModel extends ControlBaseModel<RadioButtonControlModel> {
  kind: 'radio-button'
}

export type ControlType =
  | ControlInputModel
  | ControlButtonModel
  | ControlTextareaModel
  | ControlRadioButtonModel

export type BaseFormModel<TKey> = Record<keyof TKey, ControlType>

export type ControlsType = { name: string, model: ControlType }[]
