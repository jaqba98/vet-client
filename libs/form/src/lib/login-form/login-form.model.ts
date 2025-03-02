import { ControlType } from '@vet-client/lib-base-form';

export interface LoginFormModel {
  email: ControlType;
  password: ControlType;
  login: ControlType;
}

export interface LoginModel {
  email: string;
  password: string;
  login: boolean;
}
