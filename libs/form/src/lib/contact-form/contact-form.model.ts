// done
import { ControlType } from '@vet-client/lib-system';

export interface ContactFormModel {
  firstName: ControlType;
  lastName: ControlType;
  email: ControlType;
  subject: ControlType;
  message: ControlType;
  send: ControlType;
}

export interface ContactFormDataModel {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  send: boolean;
}
