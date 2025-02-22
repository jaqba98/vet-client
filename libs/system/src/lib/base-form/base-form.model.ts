import { InputControlModel, ButtonControlModel } from '@vet-client/lib-control';

export enum ControlKindEnum {
  input = 'input',
  button = 'button'
}

export interface ControlBaseModel<TDefaultValue> {
  name: string;
  defaultValue: TDefaultValue;
  isInModel: boolean;
}

export interface ControlInputModel extends ControlBaseModel<string>, InputControlModel {
  kind: ControlKindEnum.input;
}

export interface ControlButtonModel extends ControlBaseModel<boolean>, ButtonControlModel {
  kind: ControlKindEnum.button;
}

export type ControlType = ControlInputModel | ControlButtonModel;

export interface BaseFormModel<TModel> {
  controls: ControlType[];
  onSubmit: (model: TModel) => void;
}
