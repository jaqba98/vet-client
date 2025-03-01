// done
import { ControlType } from '@vet-client/lib-base-form';

export interface ContactFormModel {
  email: ControlType;
  subject: ControlType;
  message: ControlType;
  send: ControlType;
}

export interface ContactFormDataModel {
  email: string;
  subject: string;
  message: string;
  send: boolean;
}
