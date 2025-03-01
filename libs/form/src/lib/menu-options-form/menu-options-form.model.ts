import { ControlType } from '@vet-client/lib-base-form';

// done
export interface MenuOptionsFormModel {
  home: ControlType;
  aboutUs: ControlType;
  price: ControlType;
  contact: ControlType;
}

export interface MenuOptionsFormDataModel {
  home: boolean;
  aboutUs: boolean;
  price: boolean;
  contact: boolean;
}
