// done
import { ControlType } from '@vet-client/lib-system';

export interface RegistrationFormModel {
  email: ControlType;
  password: ControlType;
  confirmPassword: ControlType;
  firstName: ControlType;
  lastName: ControlType;
  role: ControlType;
  register: ControlType;
}

export interface RegistrationFormDataModel {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  role: string;
  register: boolean;
}
