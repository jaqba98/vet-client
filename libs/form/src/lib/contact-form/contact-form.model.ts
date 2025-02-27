import { ControlType } from '@vet-client/lib-system';

export interface ContactFormModel {
  email: ControlType;
  password: ControlType;
  forgotPassword: ControlType;
  login: ControlType;
  registration: ControlType;
}

export interface ContactFormDataModel {
  email: string;
  password: string;
  forgotPassword: boolean;
  login: boolean;
  registration: boolean;
}
