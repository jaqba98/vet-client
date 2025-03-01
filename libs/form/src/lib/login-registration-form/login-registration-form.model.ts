// done
import { ControlType } from '@vet-client/lib-base-form';

export interface LoginRegistrationFormModel {
  login: ControlType;
  registration: ControlType;
}

export interface LoginRegistrationFormDataModel {
  login: boolean;
  registration: boolean;
}
