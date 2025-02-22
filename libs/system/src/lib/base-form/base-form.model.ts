import { ButtonControlModel, InputControlModel } from '@vet-client/lib-control';
import { FormGroup } from '@angular/forms';

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

export interface BaseFormModel {
  controls: ControlType[];
  onSubmit: (formGroup: FormGroup) => void;
}
