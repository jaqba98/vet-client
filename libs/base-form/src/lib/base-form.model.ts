import { ValidatorFn } from '@angular/forms';

import { ButtonControlModel, InputControlModel, TextareaControlModel } from '@vet-client/lib-control';
import { RadioButtonControlModel } from '@vet-client/lib-control';

export interface ControlBaseModel<TDefaultValue> {
  defaultValue: TDefaultValue;
  isEnabled: boolean;
}

export interface ControlInputModel extends ControlBaseModel<string>, InputControlModel {
  kind: 'input';
  validators: ValidatorFn[];
}

export interface ControlButtonModel extends ControlBaseModel<boolean>, ButtonControlModel {
  kind: 'button';
}

export interface ControlTextareaModel extends ControlBaseModel<string>, TextareaControlModel {
  kind: 'textarea';
  validators: ValidatorFn[];
}

export interface ControlRadioButtonModel extends ControlBaseModel<string>, RadioButtonControlModel {
  kind: 'radio-button';
}

export type ControlType =
  | ControlInputModel
  | ControlButtonModel
  | ControlTextareaModel
  | ControlRadioButtonModel;

export type BaseFormModel<TKey> = Record<keyof TKey, ControlType>;

export type ControlsArrayType = { name: string, model: ControlType }[];
