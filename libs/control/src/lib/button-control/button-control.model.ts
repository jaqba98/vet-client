// done
import { IconControlModel } from '../icon-control/icon-control.model';

interface TextValueModel {
  type: 'text';
  text: string;
}

interface IconValueModel {
  type: 'icon';
  icon: IconControlModel;
}

interface LinkValueModel {
  type: 'link';
  text: string;
}

type ValueType = TextValueModel | IconValueModel | LinkValueModel;

export interface ButtonControlModel {
  id: string;
  value: ValueType;
  fullWidth: boolean;
}
