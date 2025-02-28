// done
import { ControlType } from '@vet-client/lib-system';

export interface LoginFormModel {
  email: ControlType;
  password: ControlType;
  login: ControlType;
}

export interface LoginFormDataModel {
  email: string;
  password: string;
  login: boolean;
}
