import { ControlType } from '@vet-client/lib-base-form';

export interface HomeNavMenuFormModel {
  home: ControlType;
  aboutUs: ControlType;
  price: ControlType;
  contact: ControlType;
}

export interface HomeNavMenuModel {
  home: boolean;
  aboutUs: boolean;
  price: boolean;
  contact: boolean;
}
