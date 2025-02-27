import { InputControlTypeEnum } from './input-control-type.enum';

export interface InputControlModel {
  type: InputControlTypeEnum;
  label: string;
  placeholder: string;
}
