import { IconControlModel } from '../icon-control/icon-control.model';

export enum ButtonValueTypeEnum {
  text = 'text',
  icon = 'icon'
}

interface ButtonValueTextModel {
  valueType: ButtonValueTypeEnum.text;
  text: string;
}

interface ButtonValueIconModel {
  valueType: ButtonValueTypeEnum.icon;
  model: IconControlModel;
}

type ButtonValueType = ButtonValueTextModel | ButtonValueIconModel;

export interface ButtonControlModel {
  type: 'button' | 'submit' | 'reset';
  value: ButtonValueType;
}
