import { ControlType } from '@vet-client/lib-base-form';

export interface VetMenuFormModel {
  vetSettings: ControlType;
  vetClinic: ControlType;
}

export interface VetMenuModel {
  vetSettings: boolean;
  vetClinic: boolean;
}
