import { IconControlModel } from '../icon-control/icon-control.model';

interface TextValueModel {
  type: 'text';
  text: string;
}

interface IconValueModel {
  type: 'icon';
  icon: IconControlModel;
}

type ValueType = TextValueModel | IconValueModel;

export interface ButtonControlModel {
  id: string;
  type: 'button' | 'submit' | 'reset';
  value: ValueType;
}
