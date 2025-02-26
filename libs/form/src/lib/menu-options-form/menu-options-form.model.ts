import { ControlType } from '@vet-client/lib-system';

export interface MenuOptionsFormModel {
  home: ControlType;
  aboutUs: ControlType;
  price: ControlType;
}

export interface MenuOptionsFormDataModel {
  home: boolean;
  aboutUs: boolean;
  price: boolean;
}
