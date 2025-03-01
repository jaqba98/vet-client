import { ControlType } from '@vet-client/lib-base-form';

// done
export interface LoginRegistrationSmallFormModel {
  login: ControlType;
  registration: ControlType;
}

export interface LoginRegistrationSmallFormDataModel {
  login: boolean;
  registration: boolean;
}
