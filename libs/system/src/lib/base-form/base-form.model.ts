import { ButtonControlModel, InputControlModel } from '@vet-client/lib-control';

export interface ControlBaseModel<TDefaultValue> {
  defaultValue: TDefaultValue;
}

export interface ControlInputModel extends ControlBaseModel<string>, InputControlModel {
  kind: 'input';
}

export interface ControlButtonModel extends ControlBaseModel<boolean>, ButtonControlModel {
  kind: 'button';
}

export type ControlType = ControlInputModel | ControlButtonModel;

export type BaseFormModel<TKey> = Record<keyof TKey, ControlType>;

export type ControlsArrayType = { name: string, model: ControlType }[];
