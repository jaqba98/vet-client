import { ControlType } from '@vet-client/lib-system';

export interface NavOptionsFormModel {
  home: ControlType;
  aboutUs: ControlType;
}

export interface NavOptionsFormDataModel {
  home: boolean;
  aboutUs: boolean;
}
