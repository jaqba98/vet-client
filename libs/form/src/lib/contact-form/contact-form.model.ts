// done
import { ControlType } from '@vet-client/lib-system';

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
