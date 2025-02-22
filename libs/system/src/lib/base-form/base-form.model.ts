import { ButtonControlModel, InputControlModel } from '@vet-client/lib-control';

export enum ControlKindEnum {
  input = 'input',
  button = 'button'
}

export interface ControlInputModel extends InputControlModel {
  kind: ControlKindEnum.input;
}

export interface ControlButtonModel extends ButtonControlModel {
  kind: ControlKindEnum.button;
}

export type ControlType = ControlInputModel | ControlButtonModel;

export interface BaseFormModel<TModel> {
  controls: ControlType[];
  onSubmit: (model: TModel) => void;
}
