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

interface LinkValueModel {
  type: ButtonControlTypeEnum.link;
  tip: string;
  text: string;
}

type ValueType = TextValueModel | IconValueModel | LinkValueModel;

export interface ButtonControlModel {
  id: string;
  value: ValueType;
}
