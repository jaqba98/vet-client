import { IconControlModel } from '../icon-control/icon-control.model';
import { ButtonControlTypeEnum } from './button-control-type.enum';

interface TextValueModel {
  type: ButtonControlTypeEnum.text;
  text: string;
}

interface IconValueModel {
  type: ButtonControlTypeEnum.icon;
  icon: IconControlModel;
}

type ValueType = TextValueModel | IconValueModel;

export interface ButtonControlModel {
  id: string;
  value: ValueType;
}
