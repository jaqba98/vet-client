import { ButtonControlModel, InputControlModel } from '@vet-client/lib-control';

export interface ControlInputModel extends InputControlModel {
  kind: 'input';
}

export interface ControlButtonModel extends ButtonControlModel {
  kind: 'button';
}

export type ControlType = ControlInputModel | ControlButtonModel;

export type BaseFormModel<TKey> = Record<keyof TKey, ControlType>;

export type ControlsArrayType = { name: string, model: ControlType }[];
