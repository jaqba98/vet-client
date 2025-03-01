import { ControlType } from '@vet-client/lib-base-form';

export interface ContactFormModel {
  email: ControlType;
  subject: ControlType;
  message: ControlType;
  send: ControlType;
}

export interface ContactModel {
  email: string;
  subject: string;
  message: string;
  send: boolean;
}
