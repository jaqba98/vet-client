import { IconControlModel } from '../icon-control/icon-control.model';
import { ButtonControlTypeEnum } from './button-control-type.enum';

interface BaseModel {
  position: 'left' | 'center' | 'right';
}

interface TextValueModel extends BaseModel {
  type: ButtonControlTypeEnum.text;
  text: string;
}

interface IconValueModel extends BaseModel {
  type: ButtonControlTypeEnum.icon;
  icon: IconControlModel;
}

interface LinkValueModel extends BaseModel {
  type: ButtonControlTypeEnum.link;
  tip: string;
  text: string;
}

type ValueType = TextValueModel | IconValueModel | LinkValueModel;

export interface ButtonControlModel {
  id: string;
  value: ValueType;
}
