import { ControlType } from '@vet-client/lib-system';

export interface LoginRegistrationFormModel {
  login: ControlType;
  registration: ControlType;
}

export interface LoginRegistrationFormDataModel {
  login: boolean;
  registration: boolean;
}
