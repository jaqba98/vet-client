// done
import { ControlType } from '@vet-client/lib-system';

export interface LoginRegistrationSmallFormModel {
  login: ControlType;
  registration: ControlType;
}

export interface LoginRegistrationSmallFormDataModel {
  login: boolean;
  registration: boolean;
}
