import { ControlType } from '@vet-client/lib-system';

export interface LoginFormModel {
  email: ControlType;
  password: ControlType;
  forgotPassword: ControlType;
  login: ControlType;
  registration: ControlType;
}

export interface LoginFormDataModel {
  email: string;
  password: string;
  forgotPassword: boolean;
  login: boolean;
  registration: boolean;
}
